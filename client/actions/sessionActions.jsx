import * as types from './actionTypes';
import sessionApi from '../api/sessionApi';
import auth from '../auth/authenticator';

export const loginUser = credentials => {
	return (dispatch) => {
		return sessionApi.login(credentials)
			.then(response => {
				sessionStorage.setItem('token', response.token);
			
				dispatch(loginSuccess());
			})
			.catch(error => {
				throw(error);
			});
	};
};

export const loginSuccess = () => {
	return {
		type: types.LOGIN_SUCCESS
	};
};

export const logoutUser = () => {
	auth.logOut();
	
	return {
		type: types.LOGOUT_SUCCESS
	};
};
