import React from 'react';
import PropTypes from 'prop-types';

const Button = ({type, disabled, name, value, classNames, onClick}) => (
	<div className="form-group">
		<input type={type} name={name} disabled={disabled} value={value} className={classNames} onClick={onClick} />
	</div>
);

Button.propTypes = {
	type: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
	classNames: PropTypes.string,
	onClick: PropTypes.func.isRequired
};

export default Button;
