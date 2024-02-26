import PropTypes from 'prop-types';

function FeedbackStats({ feedback }) {
	// Calculate the average rating
	const averageRating =
		feedback.reduce((accumulator, review) => {
			return accumulator + review.rating;
		}, 0) / feedback.length;

	if (feedback.length === 0) {
		return;
	}

	return (
		<div className='feedback-stats'>
			<h4>{feedback.length} Évaluations</h4>
			<h4>Évaluation Moyenne : {averageRating.toFixed(1).replace(/[.,]0$/, '')}</h4>
		</div>
	);
}

// Define the prop types
FeedbackStats.propTypes = {
	feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
