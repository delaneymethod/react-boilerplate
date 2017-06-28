import { combineReducers } from 'redux';
import users from './userReducer';
import session from './sessionReducer';

const rootReducer = combineReducers({
	// short hand property names
	users,
	session
});

export default rootReducer;
