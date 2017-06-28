class UserApi {
	static requestHeaders() {
		return {
			'AUTHORIZATION': `Bearer ${sessionStorage.token}`
		};
	};
	
	static getAllUsers() {
		const headers = this.requestHeaders();
		
		const request = new Request(`${process.env.API_HOST}/users`, {
			method: 'GET',
			headers: headers
		});
		
		return fetch(request)
			.then(response => {
				return response.json();
			}).catch(error => {
				return error;
			});
	};
	
	static createUser(user) {
		const headers = Object.assign({
			'Content-Type': 'application/json'
		}, this.requestHeaders());
		
		const request = new Request(`${process.env.API_HOST}/users`, {
			method: 'POST',
			headers: headers, 
			body: JSON.stringify({
				user: user
			})
		});
		
		return fetch(request)
			.then(response => {
				return response.json();
			}).catch(error => {
				return error;
			});
	};
	
	static updateUser(user) {
		const headers = Object.assign({
			'Content-Type': 'application/json'
		}, this.requestHeaders());
		
		const request = new Request(`${process.env.API_HOST}/users/${user.id}`, {
			method: 'PUT',
			headers: headers,
			body: JSON.stringify({
				user: user
			})
		});
		
		return fetch(request)
			.then(response => {
				return response.json();
			}).catch(error => {
				return error;
			});
	};
	
	static deleteUser(user) {
		const headers = Object.assign({
			'Content-Type': 'application/json'
		}, this.requestHeaders());
		
		const request = new Request(`${process.env.API_HOST}/users/${user.id}`, {
			method: 'DELETE',
			headers: headers
		});
		
		return fetch(request)
			.then(response => {
				return response.json();
			}).catch(error => {
				return error;
			});
	};
}

export default UserApi;
