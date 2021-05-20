import express from 'express';
import fs from 'fs-extra';

const blogsRouter = express.Router();

blogsRouter.get('/blogPosts/:id/comments', (req, res, next) => {});

blogsRouter.post('/blogPosts/:id/comments', (req, res, next) => {});

blogsRouter.post('/', async (req, res, next) => {
	try {
		const newBlog = { ...req.body, createdAt: new Date(), _id: uniqid() };

		blogPosts.push(newBlog);
	} catch (error) {
		next(error);
	}
});

blogsRouter.post('/blogPosts/:id/uploadCover', (req, res, next) => {});

blogsRouter.post('/blogPosts/:id/uploadCover', (req, res, next) => {});

export default blogsRouter;
