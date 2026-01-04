import express from 'express';
import { body } from 'express-validator';
import {
  submitContact,
  getContacts,
  markAsRead,
  deleteContact,
} from '../controllers/contactController.js';

const router = express.Router();

// Validation rules for contact form
const contactValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ max: 100 })
    .withMessage('Name cannot exceed 100 characters'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please enter a valid email'),
  body('subject')
    .trim()
    .notEmpty()
    .withMessage('Subject is required')
    .isLength({ max: 200 })
    .withMessage('Subject cannot exceed 200 characters'),
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ max: 2000 })
    .withMessage('Message cannot exceed 2000 characters'),
];

router.route('/').post(contactValidation, submitContact).get(getContacts);

router.route('/:id/read').put(markAsRead);

router.route('/:id').delete(deleteContact);

export default router;
