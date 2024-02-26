import PropTypes from 'prop-types';

function Component(props) {
	// !---> STYLING <---! //
	const componentStyles = {};

	// !---> RENDERING <---! //
	return <div style={componentStyles}></div>;
}

// !---> DEFAULT PROPERTIES <---! //
Header.defaultProps = {};

// !---> PROPTYPES VALIDATION <---! //
PropTypes.Header = {};

export default Component;
