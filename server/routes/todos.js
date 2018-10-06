const bodyParser = require('body-parser');

const _todos = require('../controllers').todos;
const jsonParser = bodyParser.json();

const url = '/api/todos/';

const setupRoute = app => {
	app.get(url, (req, res) => {
		_todos.getAll(req, res);
	});

	app.get(`${url}:id`, (req, res) => {
		_todos.byId(req, res);
	});

	app.post(url, jsonParser, (req, res) => {
		_todos.create(req, res);
	});

	app.put(`${url}:id`, jsonParser, (req, res) => {
		_todos.update(req, res);
	});

	app.delete(`${url}:id`, (req, res) => {
		_todos.delete(req, res);
	});
};

module.exports = setupRoute;
