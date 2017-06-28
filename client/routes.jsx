import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import UsersPage from './components/users/UsersPage';
import UserPage from './components/users/UserPage';
import NewUserPage from './components/users/NewUserPage';
import AboutPage from './components/about/AboutPage';
import LoginPage from './components/login/LoginPage';
import auth from './auth/authenticator';

const requireAuth = (nextState, replace) => {
	if (!auth.loggedIn()) {
		replace({
			pathname: '/login',
			state: { 
				nextPathname: nextState.location.pathname
			}
		});
	}
};

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="/login" component={LoginPage} />
		<Route path="/users" component={UsersPage} onEnter={requireAuth}>
			<Route path="/users/new" component={NewUserPage} />
			<Route path="/users/:id" component={UserPage} />
		</Route>
		<Route path="/about" component={AboutPage} />
	</Route>
);

export default routes;
