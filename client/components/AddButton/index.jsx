import React from 'react';
import PropTypes from 'prop-types';
import './add-button.css';

const AddButton = ({ onClick }) => (
	<button className="add-button" onClick={onClick}>
    Add
	</button>
);

AddButton.propTypes = {
	onClick: PropTypes.func
};

export default AddButton;
