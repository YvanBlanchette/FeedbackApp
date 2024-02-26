import PropTypes from 'prop-types';

function Button({ children, version, type, isDisabled }) {
	return (
		<button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
			{children}
		</button>
	);
}

// Default properties for the Button component
Button.defaultProps = {
	version: 'primary',
	type: 'button',
	isDisabled: false,
};

// Define the prop types for the Button component
Button.propTypes = {
	children: PropTypes.node.isRequired,
	version: PropTypes.string,
	type: PropTypes.string,
	isDisabled: PropTypes.bool,
};

export default Button;
