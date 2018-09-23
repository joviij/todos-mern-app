import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo }) => (
	<li>
		{todo.todo}
		<br />
		{todo.label}
	</li>
);

Todo.propTypes = {
	todo: PropTypes.object.isRequired
};

export default Todo;
