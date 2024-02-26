import PropTypes from 'prop-types';

// Rendering the component
function Card({ children, darkMode }) {
	return <div className={`card ${darkMode && 'darkMode'}`}>{children}</div>;
}

// Define the default properties
Card.defaultProps = {
	darkMode: false,
};

// Define the prop types
Card.propTypes = {
	children: PropTypes.node.isRequired,
	darkMode: PropTypes.bool,
};
export default Card;
