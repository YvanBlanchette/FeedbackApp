import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
	// Extract state from the context
	const { feedback } = useContext(FeedbackContext);

	// Calculate the average rating
	const averageRating =
		feedback.reduce((accumulator, review) => {
			return accumulator + review.rating;
		}, 0) / feedback.length;

	// If there are no reviews, return nothing
	if (feedback.length === 0) {
		return;
	}

	// Rendering the component
	return (
		<div className='feedback-stats'>
			<h4>{feedback.length} Évaluations</h4>
			<h4>Évaluation Moyenne : {averageRating.toFixed(1).replace(/[.,]0$/, '')}</h4>
		</div>
	);
}

export default FeedbackStats;
