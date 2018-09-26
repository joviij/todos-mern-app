import { SELECT_TODO, DESELECT_TODO } from '../actions/Todo';

const reducer = (state = {
	todos: null,
	selected: null
}, action) => {
	switch (action.type) {
	case SELECT_TODO:
		return { ...state, selected: action.todo };
	case DESELECT_TODO:
		return { ...state, selected: null };
	default:
		return state;
	}
};

export default reducer;
