import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userActions';
import UserForm from './UserForm';
import { browserHistory } from 'react-router';

class NewUserPage extends Component {
	constructor(props, context) {
		super(props, context);
		
		this.state = {
			user: {
				first_name: '', 
				last_name: '', 
			},
			saving: false
		};
		
		this.updateUserState = this.updateUserState.bind(this);
		
		this.saveUser = this.saveUser.bind(this);
		
		this.redirect = this.redirect.bind(this);
	};
	
	saveUser(event) {
		event.preventDefault();
		
		this.props.actions.createUser(this.state.user);
	};
	
	updateUserState(event) {
		const field = event.target.name;
		
		const user = this.state.user;
		
		user[field] = event.target.value;
		
		return this.setState({
			user: user
		});
	};
	
	redirect() {
		browserHistory.push('/users');
	};
	
	render() {
		return (
			<div>
				<h1>Add User</h1>
				<UserForm user={this.state.user} onSave={this.saveUser} onChange={this.updateUserState} />
			</div>
		);
	};
};

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(userActions, dispatch)
	};
};

const mapStateToProps = (state, ownProps) => {
	return {
	};
};

NewUserPage.propTypes = {
	actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(NewUserPage);
