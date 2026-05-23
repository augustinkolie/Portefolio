import { pool } from '../config/database.js';

// ─── Validation helpers ──────────────────────────────────────────────────────

const validate = (data) => {
    const errors = [];

    if (!data.name || data.name.trim().length === 0)
        errors.push('Name is required');
    else if (data.name.trim().length > 100)
        errors.push('Name cannot exceed 100 characters');

    if (!data.email || data.email.trim().length === 0)
        errors.push('Email is required');
    else if (!/^\S+@\S+\.\S+$/.test(data.email.trim()))
        errors.push('Please provide a valid email');

    if (data.phone && data.phone.trim().length > 20)
        errors.push('Phone cannot exceed 20 characters');

    if (!data.subject || data.subject.trim().length === 0)
        errors.push('Subject is required');
    else if (data.subject.trim().length > 200)
        errors.push('Subject cannot exceed 200 characters');

    if (!data.message || data.message.trim().length === 0)
        errors.push('Message is required');
    else if (data.message.trim().length > 2000)
        errors.push('Message cannot exceed 2000 characters');

    return errors;
};

// ─── Contact model ───────────────────────────────────────────────────────────

const Contact = {
    /**
     * Crée un nouveau message de contact.
     * @returns {Object} La ligne insérée
     */
    async create({ name, email, phone, subject, message }) {
        const errors = validate({ name, email, phone, subject, message });
        if (errors.length > 0) {
            const err = new Error('Validation failed');
            err.name = 'ValidationError';
            err.errors = errors;
            throw err;
        }

        const query = `
            INSERT INTO contacts (name, email, phone, subject, message)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, name, email, phone, subject, message, status, created_at AS "createdAt"
        `;
        const values = [
            name.trim(),
            email.trim().toLowerCase(),
            phone ? phone.trim() : null,
            subject.trim(),
            message.trim()
        ];

        const { rows } = await pool.query(query, values);
        return rows[0];
    },

    /**
     * Récupère tous les contacts, triés du plus récent au plus ancien.
     * @param {number} limit - Nombre maximum de résultats (défaut: 100)
     * @returns {Array} Liste des contacts
     */
    async findAll(limit = 100) {
        const query = `
            SELECT id, name, email, phone, subject, message, status,
                   created_at AS "createdAt"
            FROM contacts
            ORDER BY created_at DESC
            LIMIT $1
        `;
        const { rows } = await pool.query(query, [limit]);
        return rows;
    },

    /**
     * Trouve un contact par son ID.
     * @param {number} id
     * @returns {Object|null}
     */
    async findById(id) {
        const query = `
            SELECT id, name, email, phone, subject, message, status,
                   created_at AS "createdAt"
            FROM contacts
            WHERE id = $1
        `;
        const { rows } = await pool.query(query, [id]);
        return rows[0] || null;
    },

    /**
     * Met à jour le statut d'un contact.
     * @param {number} id
     * @param {string} status - 'new' | 'read' | 'replied'
     * @returns {Object|null}
     */
    async updateStatus(id, status) {
        const allowed = ['new', 'read', 'replied'];
        if (!allowed.includes(status)) throw new Error(`Invalid status: ${status}`);

        const query = `
            UPDATE contacts
            SET status = $1
            WHERE id = $2
            RETURNING id, name, email, status, created_at AS "createdAt"
        `;
        const { rows } = await pool.query(query, [status, id]);
        return rows[0] || null;
    }
};

export default Contact;
