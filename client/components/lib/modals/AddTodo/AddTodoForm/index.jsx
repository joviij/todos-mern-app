import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import './add-todo-form.css';

const onSubmit = data => console.log(data);

const AddTodoForm = props => (
	<form onSubmit={props.handleSubmit(onSubmit)} className="add-todo-form">
		<Field
			name="title" 
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
		<button type="submit">Create</button>
	</form>
);

AddTodoForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
	form: 'add-todo'
})(AddTodoForm);
