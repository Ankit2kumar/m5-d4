import { body } from 'express-validator';

export const blogPostValidation = [
	body('authorName').exists().withMessage('Author Name is mandatory'),
	body('text').exists().withMessage('Text is mandatory'),
];

export const commentsValidation = [
	body('comment').exists().withMessage('Comment Text is a mandatory field!'),
];
