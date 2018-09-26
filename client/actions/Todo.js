import { openModal, closeModal } from 'react-modable';

const TODO = 'TODO';

export const SELECT_TODO = `${TODO}/SELECT`;
export const selectTodo = todo => dispatch => {
	dispatch(openModal('todo'));
	return dispatch({ type: SELECT_TODO, todo });
};

export const DESELECT_TODO = `${TODO}/DESELECT`;
export const deselectTodo = () => dispatch => {
	dispatch(closeModal());
	return dispatch({ type: DESELECT_TODO });
};
