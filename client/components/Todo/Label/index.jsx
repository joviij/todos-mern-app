import React from 'react';
import PropTypes from 'prop-types';
import './label.css';
import { Field } from 'redux-form';

const TodoLabel = ({ label, editing }) => (
	label ? (
		<span className="label">
			{ editing ? <Field 
				component="input"
				type="text"
				name="label"
				placeholder={label}
			/> : label }
		</span> 
	) : null
);

TodoLabel.propTypes = {
	label: PropTypes.string,
	editing: PropTypes.bool
};

export default TodoLabel;
