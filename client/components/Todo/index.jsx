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

const onSelectTodo = props => {
	props.onSelect(props.todo);
};

const Todo = props => (
	<li className="todo" onClick={onSelectTodo.bind(null, props)}>
		{props.todo.todo}
		<br />
		<TodoLabel label={props.todo.label} />
	</li>
);

Todo.propTypes = {
	todo: PropTypes.object.isRequired,
	onSelect: PropTypes.func.isRequired
};

export default Todo;
