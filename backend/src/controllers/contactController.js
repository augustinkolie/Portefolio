import Contact from '../models/Contact.js';
import { sendContactEmail } from '../config/email.js';

export const submitContact = async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        if (!name || name.trim() === "") {
            return res.status(400).json({ success: false, message: 'Le nom est obligatoire.' });
        }
        if (!email || email.trim() === "") {
            return res.status(400).json({ success: false, message: 'L\'email est obligatoire.' });
        }
        if (!message || message.trim() === "") {
            return res.status(400).json({ success: false, message: 'Le message est obligatoire.' });
        }

        // 1. Sauvegarde en base PostgreSQL
        const contact = await Contact.create({ name, email, phone, subject, message });

        // 2. Envoi de l'email de notification (non bloquant en cas d'erreur)
        try {
            await sendContactEmail({ name, email, phone, subject, message });
            console.log('📧 Email de notification envoyé.');
        } catch (emailError) {
            // On ne fait pas échouer la requête si l'email plante
            console.error('⚠️  Email non envoyé (message quand même sauvegardé):', emailError.message);
        }

        res.status(201).json({
            success: true,
            message: 'Message enregistré avec succès!',
            data: {
                id: contact.id,
                createdAt: contact.createdAt
            }
        });

    } catch (error) {
        console.error('Contact submission error:', error);

        // Erreurs de validation
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: error.errors
            });
        }

        res.status(500).json({
            success: false,
            message: 'Une erreur est survenue. Veuillez réessayer.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};

export const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.findAll(100);

        res.status(200).json({
            success: true,
            count: contacts.length,
            data: contacts
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching contacts',
            error: error.message
        });
    }
};
