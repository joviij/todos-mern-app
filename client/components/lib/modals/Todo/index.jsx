import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../../containers/lib/modals/Modal';
import Preview from '../../../../containers/lib/modals/Todo/Preview';
import './todo-modal.css';

function consoleMe() {
	console.log('Me');
}

const Todo = props => (
	<Modal actions={[{ label: 'Me', onClick: consoleMe }]}>
		<Preview />
	</Modal>
);

Todo.propTypes = {
	onHide: PropTypes.func
};

export default Todo;
