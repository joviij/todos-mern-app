import { openModal } from 'react-modable';

const ADD_BUTTON = 'ADD_BUTTON';

export const CREATE_TODO_FORM = `${ADD_BUTTON}/CREATE_TODO_FORM`;
export const createTodoForm = () => dispatch => {
	dispatch(openModal('add-todo'));
	return dispatch({ type: CREATE_TODO_FORM });
};
