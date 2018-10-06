module.exports = {
	log: (req, res, msg) => {
		const statusCode = {
			'200': '✅  (200)',
			'400': '❌  (400)',
			'404': '❓  (404)',
		};
		console.log(`${msg ? msg + ' ' : ''} - ${statusCode[res.statusCode]} •`, '\x1b[32m', req.method, '\x1b[0m', `• ${req.path}`);
		if (Object.keys(req.body).length > 0 && req.body.constructor === Object) {
			console.log(req.body);
			console.log(`>>> END Request Body Preview @ ${new Date().toTimeString()} <<<`);
		}
	}
};
