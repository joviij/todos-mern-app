const ObjectId = require('mongoose').Types.ObjectId;
const Todo = require('../../models').Todo;
const log = require('../../helpers').log;

module.exports = (req, res) => {
	log(req, res, 'CREATE TODO');
	const id = ObjectId();
	let todo = req.body;
	if (todo) {
		todo._id = id;
		Todo.collection.insertOne(todo);
		res.status(201);
		res.send(todo);
	} else {
		res.status(400);
		res.send('A todo should be defined.');
	}
};
