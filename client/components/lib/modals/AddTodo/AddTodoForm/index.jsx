import React from 'react';
import { Field } from 'redux-form';
import './add-todo-form.css';
import Alphanumeric from '../../../Alphanumeric';

const AddTodoForm = props => (
	<React.Fragment>
		<Field
			name="todo" 
			component={Alphanumeric} 
			type="text" 
			placeholder="What do you have to do?"
		/>
		<Field
			name="label"
			component={Alphanumeric}
			type="text"
			placeholder="school/work"
		/>
		<Field
			name="status"
			component={Alphanumeric}
			type="number"
			placeholder="1, 2 or 3"
		/>
	</React.Fragment>
);

export default AddTodoForm;
