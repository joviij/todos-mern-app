import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import './add-todo-form.css';

const AddTodoForm = props => (
	<form onSubmit={props.handleSubmit(props.onSubmit)} className="add-todo-form">
		<Field
			name="todo" 
			component="input" 
			type="text" 
			placeholder="Wash the dishes"
		/>
		<Field
			name="label"
			component="input"
			type="text"
			placeholder="housekeeping"
		/>
		<Field
			name="status"
			component="input"
			type="number"
			placeholder="1"
		/>
		<button type="submit">Create</button>
	</form>
);

AddTodoForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
};

export default reduxForm({
	form: 'add-todo'
})(AddTodoForm);
