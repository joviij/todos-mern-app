import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import modal from './modal';
import todos from './todos';

export default combineReducers({ form, modal, todos });
