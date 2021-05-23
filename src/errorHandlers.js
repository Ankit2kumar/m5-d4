export const notFoundHandler = (err, req, res, next) => {
	if (err.staus === 404) {
		res.status(err.status).send({ message: err.message });
	} else {
		next(err);
	}
};

export const badRequestHandler = (err, req, res, next) => {
	if (err.staus === 400) {
		res.status(err.status).send(err.errorList || err.message);
	} else {
		next(err);
	}
};

export const catchAllHandler = (err, req, res, next) => {
	res.status(500).send('Generic Server Error');
};
