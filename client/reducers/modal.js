import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modals';

const reducer = (state = {
	modal: null,
	loading: false,
	error: null
}, action) => {
	switch (action.type) {
	case OPEN_MODAL:
		return { ...state, modal: action.id };
	case CLOSE_MODAL:
		return { ...state, modal: null };
	default:
		return state;
	}
};

export default reducer;
