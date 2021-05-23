import fs from 'fs-extra';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const { readJSON, writeJSON, writeFile, createReadStream } = fs;

const dataFolderPath = join(dirname(fileURLToPath(import.meta.url)), '../data');
const authorFolderPath = join(
	dirname(fileURLToPath(import.meta.url)),
	'../../public/img/authors'
);
const blogPostFolderPath = join(
	dirname(fileURLToPath(import.meta.url)),
	'../../public/img/blogPosts'
);

export const writeBlogs = async (content) =>
	writeJSON(join(dataFolderPath, 'blogPosts.json'), content);

export const readBlogs = async () =>
	readJSON(join(dataFolderPath, 'blogPosts.json'));

export const writeAvatarPicture = async (fileName, content) =>
	await writeFile(join(authorFolderPath, fileName), content);

export const writeCoverPicture = async (fileName, content) =>
	await writeFile(join(blogPostFolderPath, fileName), content);
