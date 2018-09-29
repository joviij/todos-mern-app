import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-modable';
import Preview from '../../../../containers/lib/modals/Todo/Preview';
import './todo-modal.css';

const Todo = ({ onHide }) => (
	<Modal modalStyle={{ borderRadius: '4px', padding: '0', overflow: 'hidden' }} className="todo-modal">
		<Preview />
		<div className="controls">
			<button onClick={onHide}>Close</button>
		</div>
	</Modal>
);

Todo.propTypes = {
	onHide: PropTypes.func
};

export default Todo;
