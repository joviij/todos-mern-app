import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../../containers/lib/modals/Modal';
import './delete-todo.css';

class DeleteTodo extends React.Component {
	get actions() {
		return [
			{
				label: 'Yes, I,\'m sure',
				onClick: this.props.onDelete.bind(null, this.props.todo._id)
			}
		];
	}
	
	render() {
		const { props } = this;
		return (
			<Modal actions={this.actions}>
				<h3 className="todo-header">Delete a todo</h3>
				<p className="delete-todo">
					Are you sure you want to delete the todo &ldquo;{props.todo.todo}&rdquo; 
					with the label &ldquo;{props.todo.label}&rdquo;?
				</p>
			</Modal>
		);
	}
}

DeleteTodo.propTypes = {
	todo: PropTypes.object.isRequired,
	onDelete: PropTypes.func.isRequired
};

export default DeleteTodo;
