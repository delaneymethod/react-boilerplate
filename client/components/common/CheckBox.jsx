import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = () => (
	<div className="form-check">
		<label className="form-check-label">{this.props.item.name} <input type="checkbox" name={this.props.item.name} className="form-check-input" value={this.props.item.id} checked={this.props.item.checked} onChange={this.props.handleChange} /></label>
	</div>
);

Checkbox.propTypes = {
	item: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired
};

export default Checkbox;
