import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-modable';
import './AddTodoForm';
import AddTodoForm from './AddTodoForm';

const AddTodo = ({ onHide }) => (
	<Modal modalStyle={{ borderRadius: '4px', padding: '0', overflow: 'hidden' }}>
		<h3 className="todo-header">Create a todo</h3>
		<AddTodoForm />
	</Modal>
);

AddTodo.propTypes = {
	onHide: PropTypes.func.isRequired
};

export default AddTodo;
