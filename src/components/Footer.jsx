import PropTypes from 'prop-types';
import Logo from './shared/Logo';

function Footer({ backgroundColor }) {
	// Define the styles
	const footerStyles = {
		backgroundColor: backgroundColor,
		textAlign: 'center',
		paddingBlock: '0.5rem',
		fontSize: '1rem',
	};

	// Rendering the component
	return (
		<footer style={footerStyles}>
			<div className='container'>
				<small>
					Une création de{' '}
					<a className='author' target='_blank' href='https://yvanblanchette.com'>
						Yvan jr Blanchette
					</a>
				</small>
			</div>
		</footer>
	);
}

// Define the default properties
Footer.defaultProps = {
	backgroundColor: 'rgba(0,0,0,0.4)',
};

// Define the prop types
PropTypes.Footer = {
	backgroundColor: PropTypes.string,
};

export default Footer;
