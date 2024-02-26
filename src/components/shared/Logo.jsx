import PropTypes from 'prop-types';
import Logosrc from '../../assets/images/mathmatix.svg';

function Logo({ text, width }) {
	//Styles
	const logoStyles = {
		width: width,
	};
	const headerStyles = {
		color: 'black',
		textAlign: 'center',
	};

	return (
		<div className='logo'>
			<img style={logoStyles} src={Logosrc} alt='Mathmatix logo' />
			<h1 style={headerStyles}>{text}</h1>
		</div>
	);
}

// Default properties for the Logo component
Logo.defaultProps = {
	text: 'MathMatix',
	width: '80px',
};

// Define the prop types for the Logo component
Logo.propTypes = {
	text: PropTypes.string,
	width: PropTypes.string,
};
export default Logo;
