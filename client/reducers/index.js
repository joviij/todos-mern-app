import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { reducer as modal } from 'react-modable';
import todos from './todos';

export default combineReducers({ form, modal, todos });
