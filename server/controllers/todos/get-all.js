const Todo = require('../../models').Todo;

module.exports = (req, res) => {
	const query = Todo.find();
	query.exec((err, docs) => {
		if (err) {
			res.status = 400;
			res.send(err);
		}
		res.send(docs);
	});
};
