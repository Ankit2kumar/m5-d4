import express from 'express';
import {
	writeStudentsPictures,
	readStudentsPictures,
} from '../lib/fs-tools.js';
import multer from 'multer';
import { pipeline } from 'stream';
import zlib from 'zlib';

const filesRouter = express.Router();

filesRouter.post(
	'/upload',
	multer().single('profilePic'),
	async (req, res, next) => {
		try {
			console.log(req.file);
			await writeStudentsPictures(req.file.originalname, req.file.buffer);
			res.send();
		} catch (error) {
			console.log(error);
			next(error);
		}
	}
);

export default filesRouter;
