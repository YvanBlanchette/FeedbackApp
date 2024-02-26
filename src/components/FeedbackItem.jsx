import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';

// Rendering the component
function FeedbackItem({ item }) {
	// Extract the deleteFeedback function from the context
	const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

	return (
		<Card darkMode={false}>
			<div className='num-display'>{item.rating}</div>
			<button onClick={() => deleteFeedback(item.id)} className='close'>
				<FaTimes />
			</button>
			<button onClick={() => editFeedback(item)} className='edit'>
				<FaEdit />
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
