const Todo = require('../../models').Todo;

module.exports = (req, res) => {
	let next = req.body;
	if (next) {
		Todo.findById(next._id, (err, todo) => {
			todo.todo = next.todo;
			todo.label = next.label;
			todo.status = next.status;

			todo.save((err, updated) => {
				if (err) {
					res.status(500);
					res.send(err);
				} else {
					res.status(201);
					res.send(updated);
				}
			});
		});
	} else {
		res.status(400);
		res.send('A todo should be defined.');
	}
};
