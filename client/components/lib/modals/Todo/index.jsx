import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../../containers/lib/modals/Modal';
import Preview from '../../../../containers/lib/modals/Todo/Preview';
import './todo-modal.css';

const Todo = props => (
	<Modal>
		<Preview />
		<div className="controls">
			<button onClick={props.onHide}>Close</button>
		</div>
	</Modal>
);

Todo.propTypes = {
	onHide: PropTypes.func
};

export default Todo;
