import React from 'react';
import PropTypes from 'prop-types';
import './todo.css';
import Label from './Label';

const onSelectTodo = props => {
	props.onSelect(props.todo);
};

const Todo = props => (
	<li className="todo" onClick={onSelectTodo.bind(null, props)}>
		{props.todo.todo}
		<br />
		<Label label={props.todo.label} />
	</li>
);

Todo.propTypes = {
	todo: PropTypes.object.isRequired,
	onSelect: PropTypes.func.isRequired
};

export default Todo;
