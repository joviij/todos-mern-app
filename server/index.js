const server = require('./server');

const PORT = 5000;
server().listen(PORT, function() {
	console.log(`Running on http://localhost:${PORT}/`); // eslint-disable-line
});
