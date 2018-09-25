const ObjectId = require('mongoose').Types.ObjectId;
const Todo = require('../../models').Todo;

module.exports = (req, res) => {
	const id = ObjectId();
	let todo = req.body;
	if (todo) {
		todo._id = id;
		Todo.collection.insertOne(todo);
		res.status(201);
		res.send(id);
	} else {
		res.status(400);
		res.send('A todo should be defined.');
	}
};
