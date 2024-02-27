import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from './FeedbackItem';
import Spinner from './shared/Spinner';
import FeedbackContext from '../context/FeedbackContext';

// Rendering the component
function FeedbackList() {
	// Extract state from the context
	const { feedback, isLoading } = useContext(FeedbackContext);

	// If there is no feedback yet, display a message
	if (!isLoading && (!feedback || feedback.length === 0)) {
		return <h2>No feedback yet</h2>;
	}

	// If the data is still loading, display a loading spinner
	if (isLoading) {
		return <Spinner />;
	} else {
		// If the data is loaded, display the feedback list
		return (
			<div className='feedback-list'>
				<AnimatePresence>
					{feedback.map((item) => (
						<motion.div
							key={item.id}
							initial={{
								opacity: 0,
							}}
							animate={{
								opacity: 1,
							}}
							exit={{ opacity: 0 }}
						>
							<FeedbackItem item={item} />
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		);
	}
}

export default FeedbackList;
