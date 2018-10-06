import { Map } from 'immutable';
import { 
	SELECT_TODO, 
	DESELECT_TODO,
	ERROR,
	REQUEST,
	GET_ALL,
	DELETE_TODO
} from '../actions/Todo';

const reducer = (state = {
	todos: null,
	selected: null,
	error: null,
	loading: null
}, action) => {
	switch (action.type) {
	case DELETE_TODO:
		return { ...state, todos: state.todos.delete(action.id), loading: false, error: null };
	case GET_ALL:
		return { ...state, todos: Map(action.todos), loading: false, error: null };
	case ERROR:
		return { ...state, error: action.error, loading: false };
	case REQUEST:
		return { ...state, loading: true, error: null };
	case SELECT_TODO:
		return { ...state, selected: action.todo, error: null, loading: false };
	case DESELECT_TODO:
		return { ...state, selected: null, error: null, loading: false };
	default:
		return state;
	}
};

export default reducer;
