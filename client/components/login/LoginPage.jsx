import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../../actions/sessionActions';
import FieldInput from '../common/FieldInput';
import Button from '../common/Button';

class LoginPage extends Component {
	constructor(props, context) {
		super(props, context);
		
		this.state = {
			credentials: {
				email: 'sophie@email.com', 
				password: 'password'
			}
		};
		
		this.onSave = this.onSave.bind(this);
		
		this.onChange = this.onChange.bind(this);
	};

	onSave(event) {
		event.preventDefault();
		
		this.props.actions.loginUser(this.state.credentials);
	};
	
	onChange(event) {
		const field = event.target.name;
		
		const credentials = this.state.credentials;
		
		credentials[field] = event.target.value;
		
		return this.setState({
			credentials: credentials
		});
	};

	render() {
		return (
			<form>
				<FieldInput type="email" name="email" classNames="form-control" label="Email Address" value={this.state.credentials.email} placeholder="Email Address" onChange={this.onChange} />
				<FieldInput type="password" name="password" classNames="form-control" label="Password" value={this.state.credentials.password} placeholder="Password" onChange={this.onChange} />
				<Button type="submit" name="Login" value="Login" classNames="btn btn-primary" onClick={this.onSave} />
			</form>
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
	};
};

LoginPage.propTypes = {
	actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
