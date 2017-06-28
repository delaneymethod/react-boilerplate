import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../../actions/sessionActions';

class Header extends Component {
	constructor(props, context) {
		super(props, context);
		
		this.logout = this.logout.bind(this);
	};
	
	logout(event) {
		event.preventDefault();
		
		this.props.actions.logoutUser();
	};
	
	render() {
		if (this.props.logged_in) {
			return (
				<nav>
					<ul>
						<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
						<li><Link to="/users" activeClassName="active">Users</Link></li>
						<li><Link to="/about" activeClassName="active">About</Link></li>
						<li><a href="/logout" onClick={this.logout}>Logout</a></li>
					</ul>
				</nav>
			);
		}
		
		return (
			<nav>
				<ul>
					<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
					<li><Link to="/users" activeClassName="active">Users</Link></li>
					<li><Link to="/about" activeClassName="active">About</Link></li>
					<li><Link to="/login" activeClassName="active">Login</Link></li>
				</ul>
			</nav>
		);
	};
};

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(sessionActions, dispatch)
	};
};

const mapStateToProps = (state, ownProps) => {
	return {
		logged_in: state.session
	};
};

Header.propTypes = {
	actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
