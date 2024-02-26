import PropTypes from 'prop-types';
import Logo from './shared/Logo';

function Header({ backgroundColor }) {
	// Define the styles
	const headerStyles = {
		backgroundColor: backgroundColor,
	};

	// Rendering the component
	return (
		<header style={headerStyles}>
			<div className='container'>
				<Logo text='MathMatix' width='80px' />
			</div>
		</header>
	);
}

// Define the default properties
Header.defaultProps = {
	backgroundColor: 'rgba(255,255,255)',
};

// Define the prop types
PropTypes.Header = {
	backgroundColor: PropTypes.string,
};

export default Header;
