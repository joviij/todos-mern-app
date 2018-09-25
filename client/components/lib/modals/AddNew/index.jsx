import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-modable';

const AddNew = ({ onHide }) => (
	<Modal modalStyle={{ borderRadius: '4px', }} curtainStyle={{ background: 'red' }}>
		Hello
		<button onClick={onHide}>Close</button>
	</Modal>
);

AddNew.propTypes = {
	onHide: PropTypes.func
};

export default AddNew;
