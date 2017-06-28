import * as types from './actionTypes';
import userApi from '../api/userApi';

export const loadUsers = () => {
	return (dispatch) => {
		return userApi.getAllUsers()
			.then(response => {
				dispatch(loadUsersSuccess(response.data));
			})
			.catch(error => {
				throw(error);
			});
	};
};

export const loadUsersSuccess = users => {
	return { 
		type: types.LOAD_USERS_SUCCESS, 
		users 
	};
};

export const createUser = user => {
	return (dispatch) => {
		return userApi.createUser(user)
			.then(response => {
				dispatch(createUserSuccess(response));
			
				return response;
			})
			.catch(error => {
				throw(error);
			});
	};
};

export const createUserSuccess = user => {
	return {
		type: types.CREATE_USER_SUCCESS, 
		user
	};
};

export const updateUser = user => {
	return (dispatch) => {
		return userApi.updateUser(user)
			.then(response => {
				dispatch(updateUserSuccess(response.user));
			})
			.catch(error => {
				throw(error);
			});
	};
}

export const updateUserSuccess = user => {
	return {
		type: types.UPDATE_USER_SUCCESS, 
		user
	};
};

export const deleteUser = user => {
	return (dispatch) => {
		return userApi.deleteUser(user)
			.then(() => {
				dispatch(deleteUserSuccess(user));
			
				return;
			})
			.catch(error => {
				throw(error);
			});
	};
};

export const deleteUserSuccess = user => {
	return {
		type: types.DELETE_USER_SUCCESS, 
		user
	};
};
