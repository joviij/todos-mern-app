import { combineReducers } from 'redux';
import { reducer as modal } from 'react-modable';
import todos from './todos';

export default combineReducers({ modal, todos });
