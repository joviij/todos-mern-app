import React from 'react';
import PropTypes from 'prop-types';
import './label.css';

const TodoLabel = ({ label }) => (
	label ? (
		<span className="label">
			{ label }
		</span> ) : null
);

TodoLabel.propTypes = {
	label: PropTypes.string
};

export default TodoLabel;
