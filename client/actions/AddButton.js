import { openModal } from './modals';
import { constants as modal } from '../components/App/modals';

const ADD_BUTTON = 'ADD_BUTTON';

export const CREATE_TODO_FORM = `${ADD_BUTTON}/CREATE_TODO_FORM`;
export const createTodoForm = () => dispatch => {
	dispatch(openModal(modal.addTodo));
	return dispatch({ type: CREATE_TODO_FORM });
};
