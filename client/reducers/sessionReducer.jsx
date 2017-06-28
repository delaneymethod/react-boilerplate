import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { browserHistory } from 'react-router';

const sessionReducer = (state = initialState.session, action) => {
	switch (action.type) {
		case types.LOGIN_SUCCESS:
			browserHistory.push('/users');
			
			return !!sessionStorage.token;
		
		case types.LOGOUT_SUCCESS:
			browserHistory.push('/');
			
			return !!sessionStorage.token;
		
		default: 
			return state;
	}
};

export default sessionReducer;
