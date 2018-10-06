import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../../containers/lib/modals/Modal';
import './AddTodoForm';
import AddTodoForm from '../../../../containers/lib/modals/AddTodo/AddTodoForm';

const AddTodo = () => (
	<Modal
		actions={[
			{ label: 'Create', type: 'submit' }
		]}
	>
		<h3 className="todo-header">Create a todo</h3>
		<AddTodoForm />
	</Modal>
);

AddTodo.propTypes = {
	onHide: PropTypes.func.isRequired
};

export default AddTodo;
