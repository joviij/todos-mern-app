import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-modable';
import Preview from '../../../../containers/lib/modals/Todo/Preview';

const Todo = ({ onHide }) => (
	<Modal modalStyle={{ borderRadius: '4px' }}>
		<Preview />
		<button onClick={onHide}>Close</button>
	</Modal>
);

Todo.propTypes = {
	onHide: PropTypes.func
};

export default Todo;
