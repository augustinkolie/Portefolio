import Contact from '../models/Contact.js';

export const submitContact = async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        // Create contact in database
        const contact = await Contact.create({
            name,
            email,
            phone,
            subject,
            message
        });

        res.status(201).json({
            success: true,
            message: 'Message enregistré avec succès!',
            data: {
                id: contact._id,
                createdAt: contact.createdAt
            }
        });

    } catch (error) {
        console.error('Contact submission error:', error);

        // Handle validation errors
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors
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
        const contacts = await Contact.find()
            .sort({ createdAt: -1 })
            .limit(100);

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
