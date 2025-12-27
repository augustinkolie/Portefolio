import express from 'express';
import { body, validationResult } from 'express-validator';
import { submitContact, getAllContacts } from '../controllers/contactController.js';

const router = express.Router();

// Validation middleware
const contactValidation = [
    body('name')
        .trim()
        .notEmpty().withMessage('Le nom est requis')
        .isLength({ max: 100 }).withMessage('Le nom ne peut pas dépasser 100 caractères'),

    body('email')
        .trim()
        .notEmpty().withMessage('L\'email est requis')
        .isEmail().withMessage('Email invalide')
        .normalizeEmail(),

    body('phone')
        .optional()
        .trim()
        .isLength({ max: 20 }).withMessage('Le téléphone ne peut pas dépasser 20 caractères'),

    body('subject')
        .trim()
        .notEmpty().withMessage('Le sujet est requis')
        .isLength({ max: 200 }).withMessage('Le sujet ne peut pas dépasser 200 caractères'),

    body('message')
        .trim()
        .notEmpty().withMessage('Le message est requis')
        .isLength({ max: 2000 }).withMessage('Le message ne peut pas dépasser 2000 caractères')
];

// Validation error handler middleware
const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: errors.array().map(err => err.msg)
        });
    }
    next();
};

// POST /api/contact - Submit contact form
router.post('/', contactValidation, handleValidationErrors, submitContact);

// GET /api/contact - Get all contacts (for admin use)
router.get('/', getAllContacts);

export default router;
