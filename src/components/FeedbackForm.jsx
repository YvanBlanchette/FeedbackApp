import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';

function FeedbackForm() {
	//Extract addFeedback and feedbackEdit functions from the context
	const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

	// Use effect to set the text state to the value of the feedbackEdit item
	useEffect(() => {
		if (feedbackEdit.edit === true) {
			setBtnDisabled(false);
			setText(feedbackEdit.item.text);
			setRating(feedbackEdit.item.rating);
		}
	}, [feedbackEdit]);

	// State to hold the value of the input field
	const [text, setText] = useState('');
	// State to hold the value of the rating select field
	const [rating, setRating] = useState('10');
	// Button disabled state
	const [btnDisabled, setBtnDisabled] = useState(true);
	// Message state
	const [message, setMessage] = useState('');

	// Function to put the value of the input field into the text state
	const handleStateChange = (e) => {
		if (text === '') {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== '' && text.trim().length <= 10) {
			setBtnDisabled(true);
			setMessage('Votre commentaire est trop court, il doit comporter au moins 10 caractères.');
		} else {
			setMessage(null);
			setBtnDisabled(false);
		}

		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// If the text state is not empty and has more than 10 characters, create a new feedback item
		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating,
			};

			// If the feedbackEdit state is true, update the feedback item
			if (feedbackEdit.edit === true) {
				updateFeedback(feedbackEdit.item.id, newFeedback);
			} else {
				addFeedback(newFeedback);
			}
			setText('');
		}
	};

	// Rendering the component
	return (
		<Card>
			<h2>Comment évalueriez-vous votre expérience ?</h2>
			<form onSubmit={handleSubmit}>
				<RatingSelect select={(rating) => setRating(rating)} />
				<div className='input-group'>
					<label htmlFor='review' hidden></label>
					<input onChange={handleStateChange} value={text} type='text' id='review' placeholder='Écrire un commentaire...' />
					<Button type='submit' version='primary' isDisabled={btnDisabled}>
						Envoyer
					</Button>
				</div>

				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	);
}

export default FeedbackForm;
