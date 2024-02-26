import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';

// Rendering the component
function FeedbackItem({ item, handleDelete }) {
	return (
		<Card darkMode={false}>
			<div className='num-display'>{item.rating}</div>
			<button onClick={() => handleDelete(item.id)} className='close'>
				<FaTimes />
			</button>
			<div className='text-display'>{item.text}</div>
		</Card>
	);
}

// Define the default properties
FeedbackItem.defaultProps = {
	item: {
		rating: 10,
		text: 'Feedback text goes here...',
	},
};

// Define the prop types
FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default FeedbackItem;
