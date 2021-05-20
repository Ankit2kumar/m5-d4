import express from 'express';
//import listEndpoints from 'express-list-endpoints';
import cors from 'cors';
// import booksRoutes from './books/index.js';
// import studentsRoutes from './students/index.js';
// import filesRoutes from './files/index.js';
// import {
// 	badRequestHandler,
// 	notFoundHandler,
// 	catchAllHandler,
// } from './errorHandlers.js';
// import { getCurrentFolderPath } from './lib/fs-tools.js';
import blogsRouter from './blogs/index.js';

const port = 3001;

const server = express();
server.use(cors());
// server.use(loggerMiddleware);
server.use(express.json());

server.use('/blogPosts', blogsRouter);

server.listen(port, () => {
	console.log('SERVER STARTED AT', port);
});
