import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { browserHistory } from 'react-router';

const userReducer = (state = initialState.users, action) => {
	switch (action.type) {
		case types.LOAD_USERS_SUCCESS:
			return action.users;
			
		case types.CREATE_USER_SUCCESS:
			browserHistory.push(`/users/${action.user.id}`);
			
			let newUser = {
				id: action.user.id,
				first_name: action.user.user.first_name,
				last_name: action.user.user.last_name
			};
			
			return [
				...state.filter(user => user.id !== action.user.id),
				Object.assign({}, newUser)
			];	
			
		case types.UPDATE_USER_SUCCESS:
			return [
				...state.filter(user => user.id !== action.user.id),
				Object.assign({}, action.user)
			];
			
		case types.DELETE_USER_SUCCESS:
			const newState = Object.assign([], state);
			
			const indexOfUserToDelete = state.findIndex(user => user.id == action.user.id);
			
			newState.splice(indexOfUserToDelete, 1);
			
			browserHistory.push('/users');
			
			return newState;
		
		default:
			return state;
	}
};

export default userReducer;
