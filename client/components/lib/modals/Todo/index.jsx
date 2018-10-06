import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../../containers/lib/modals/Modal';
import Preview from '../../../../components/lib/modals/Todo/Preview';
import './todo-modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function onDelete({ onDelete, todo }) {
	onDelete(todo._id);
}

const Todo = props => (
	<Modal 
		actions={[
			{ 
				label: <FontAwesomeIcon icon={faTrash} />, 
				onClick: onDelete.bind(null, props),
				type: 'warning' 
			}
		]}
	>
		<Preview todo={props.todo}/>
	</Modal>
);

Todo.propTypes = {
	todo: PropTypes.object,
	onHide: PropTypes.func,
	onDelete: PropTypes.func.isRequired
};

export default Todo;
