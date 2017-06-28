class SessionApi {
	static requestHeaders() {
		return {
		};
	};
	
	static login(credentials) {
		const headers = Object.assign({
			'Content-Type': 'application/json'
		}, this.requestHeaders());
		
		const request = new Request(`${process.env.API_HOST}/login`, {
			method: 'POST',
			headers: headers,
			body: JSON.stringify({
				email: credentials.email,
				password: credentials.password
			})
		});

		return fetch(request)
			.then(response => {
				return response.json();
			})
			.catch(error => {
				return error;
			});
	} 
};

export default SessionApi;
