import React from 'react';
import PropTypes from 'prop-types';
import './todo-header.css';
import { Field } from 'redux-form';

class Header extends React.Component {
	render() {
		const { todo, editing } = this.props;
		return (
			<h3 className="todo-header">
				{
					editing
						? <Field
							type="text"
							name="todoName"
							component="input"
						/>
						: todo.todo
				}
			</h3>
		);
	}
}

Header.propTypes = {
	todo: PropTypes.object.isRequired,
	editing: PropTypes.bool.isRequired,
	onEdit: PropTypes.func.isRequired
};

export default Header;
