import express from 'express';
import uniqid from 'uniqid';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import fs, { writeFile } from 'fs';
import {
	readBlogs,
	writeBlogs,
	writeAvatarPicture,
	writeCoverPicture,
} from '../lib/fs-utils.js';
import { blogPostValidation, commentsValidation } from './validation.js';

import multer from 'multer';
import { pipeline } from 'stream';
import zlib from 'zlib';

const blogPostRouter = express.Router();

blogPostRouter.post(
	'/authors/:id/uploadAvatar',
	multer().single('profilePic'),
	async (req, res, next) => {
		try {
			await writeAvatarPicture(uniqid() + '.jpg', req.file.buffer);

			res.status(201).send('Profile Picture Uploaded');
		} catch (error) {
			next(error);
		}
	}
);

blogPostRouter.post(
	'/blogPosts/:id/uploadCover',
	multer().single('coverPic'),
	async (req, res, next) => {
		try {
			await writeCoverPicture(uniqid() + '.jpg', req.file.buffer);
			res.status(201).send('Cover Picture Uploaded');
		} catch (error) {
			next(error);
		}
	}
);

blogPostRouter.post(
	'/blogPosts/:id/comments',
	commentsValidation,
	async (req, res, next) => {
		try {
			//console.log(req.body);
			const allBlogs = await readBlogs();
			const remainingBlogs = allBlogs.filter(
				//returns array
				(blog) => blog._id !== req.params.id
			);

			const requiredBlog = allBlogs.find((blog) => blog._id === req.params.id); //returns element
			requiredBlog.comments = [];
			requiredBlog.comments.push(req.body.comment);
			requiredBlog.updatedAt = new Date();
			requiredBlog.remainingBlogs.push(requiredBlog);
			writeBlogs(remainingBlogs);
			res.status(201).send();
		} catch (error) {
			next(error);
		}
	}
);

blogPostRouter.post('/blogPosts', async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
});

export default blogPostRouter;
