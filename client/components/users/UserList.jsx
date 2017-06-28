import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const UserList = props => {
	return (
		<ul className="list-group">
			{props.users.map(user => <li className="list-group-item" key={user.id}><Link to={'/users/' + user.id}>{user.first_name} {user.last_name}</Link></li>)}
		</ul>
	);
};

UserList.propTypes = {
	users: PropTypes.array.isRequired
};

export default UserList;
