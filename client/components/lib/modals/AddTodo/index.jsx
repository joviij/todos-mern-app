import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../../containers/lib/modals/Modal';
import './AddTodoForm';
import AddTodoForm from './AddTodoForm';
import { reduxForm } from 'redux-form';
import validate from '../../validate';

const actions = [
	{
		label: 'Create',
		type: 'submit'
	}
]; 

const AddTodo = ({ handleSubmit, onSubmit }) => (
	<form  onSubmit={handleSubmit(onSubmit)}>
		<Modal actions={actions}>
			<h3 className="todo-header">Create a todo</h3>
			<AddTodoForm />
		</Modal>
	</form>
);

AddTodo.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
};

export default reduxForm({
	form: 'add-todo',
	validate
})(AddTodo);
