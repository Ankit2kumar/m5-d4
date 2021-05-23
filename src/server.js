import express from 'express';
import cors from 'cors';
import listEndpoints from 'express-list-endpoints';
import blogPostRouter from './blogPosts/index.js';
import {
	notFoundHandler,
	badRequestHandler,
	catchAllHandler,
} from './errorHandlers.js';

const port = 3001;
const server = express();

server.use(express.json());
server.use(cors());

server.use('/', blogPostRouter);

console.table(listEndpoints(server));

server.use(notFoundHandler);
server.use(badRequestHandler);
server.use(catchAllHandler);

server.listen(port, () => {
	console.log('SERVER STARTED AT ', port);
});
