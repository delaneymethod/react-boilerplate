import React from 'react';
import PropTypes from 'prop-types';

const FieldInput = ({type, name, label, value, placeholder, classNames, onChange}) => (
	<div className="form-group">
		<label htmlFor={name}>{label}</label>
		<input type={type} name={name} className={classNames} placeholder={placeholder} value={value} onChange={onChange} />
	</div>
);

FieldInput.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	classNames: PropTypes.string,
	onChange: PropTypes.func.isRequired
};

export default FieldInput;
