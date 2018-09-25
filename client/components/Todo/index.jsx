import React from 'react';
import PropTypes from 'prop-types';
import './todo.css';

const TodoLabel = ({ label }) => (
	label ? (
		<span className="label">
			{ label }
		</span> ) : null
);

TodoLabel.propTypes = {
	label: PropTypes.string
};

const Todo = ({ todo }) => (
	<li className="todo">
		{todo.todo}
		<br />
		<TodoLabel label={todo.label} />
	</li>
);

Todo.propTypes = {
	todo: PropTypes.object.isRequired
};

export default Todo;
