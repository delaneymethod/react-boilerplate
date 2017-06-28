import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userActions';
import UserList from './UserList';
import { Link } from 'react-router';

class UsersPage extends Component {
	componentWillMount() {
		if (this.props.users[0].id == '') {
			this.props.actions.loadUsers();
		}
	};
	
  	render() {
		const users = this.props.users;
	
		return (
			<div className="col-md-12">
				<h1>Users <Link to={'/users/new'} className="btn btn-primary">Add User</Link></h1>
				<div className="col-md-4">
					<UserList users={users} />
				</div>
				<div className="col-md-8">
					{this.props.children}
				</div>
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
	// state = { users: [{ id: 1, first_name: "Sean", last_name: "Delaney" }, etc.] }
		
	if (state.users.length > 0) {
		return {
			users: state.users
		};
	} else {
		return {
			users: [
				{
					id: '', 
					first_name: '', 
					last_name: '' 
				}
			]
		};
	}
};

UsersPage.propTypes = {
	users: PropTypes.array.isRequired,
	children: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
