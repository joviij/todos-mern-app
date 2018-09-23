const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	todo: String,
	label: String,
	status: Number,
	created: mongoose.Schema.Types.Date
});

module.exports = mongoose.model('Todo', TodoSchema);
