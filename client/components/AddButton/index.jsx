import React from 'react';
import PropTypes from 'prop-types';
import './add-button.css';

const AddButton = ({ onOpenModal }) => (
	<button className="add-button" onClick={onOpenModal}>
    Add
	</button>
);

AddButton.propTypes = {
	onOpenModal: PropTypes.func
};

export default AddButton;
