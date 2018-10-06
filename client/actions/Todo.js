import { normalize, schema } from 'normalizr';
import { openModal, CLOSE_MODAL } from './modals';

const TODO = 'TODO';

const config = {
	api: 'http://localhost:5000'
};

const todoSchema = new schema.Entity('todo', undefined, { idAttribute: '_id' });
const todosListSchema = new schema.Array(todoSchema);

export const REQUEST = `${TODO}/REQUEST`;
export const ERROR = `${TODO}/ERROR`;

export const GET_ALL = `${TODO}/GET_ALL`;
export const getAll = () => async dispatch => {
	dispatch({ type: REQUEST });
	return fetch(`${config.api}/api/todos`)
		.then(res => res.json())
		.then(async json => {
			const result = await normalize(json, todosListSchema).entities.todo;
			return dispatch({ type: GET_ALL, todos: result });
		})
		.catch(error => dispatch({ type: ERROR, error }));
};

export const DELETE_TODO = `${TODO}/DELETE`;
export const deleteTodo = id => dispatch => {
	dispatch({ type: REQUEST });
	return fetch(`${config.api}/api/todos/${id}`, {
		method: 'DELETE'
	}).then(() => dispatch({ type: DELETE_TODO, id }))
		.catch(error => dispatch({ type: ERROR, error }));
};

export const SELECT_TODO = `${TODO}/SELECT`;
export const selectTodo = todo => dispatch => {
	dispatch(openModal('todo'));
	return dispatch({ type: SELECT_TODO, todo });
};

export const DESELECT_TODO = `${TODO}/DESELECT`;
export const deselectTodo = () => dispatch => {
	dispatch({ type: CLOSE_MODAL });
	return dispatch({ type: DESELECT_TODO });
};

export const UPDATE_TODO = `${TODO}/UPDATE`;
export const updateTodo = todo => dispatch => ({
	
});
