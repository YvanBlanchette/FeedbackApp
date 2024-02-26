import { useState } from 'react';
import Card from './shared/Card';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import { v4 as uuidv4 } from 'uuid';

function FeedbackForm({ handleAdd }) {
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
			setMessage('Your review is too short, must be at least 10 characters long.');
		} else {
			setMessage(null);
			setBtnDisabled(false);
		}

		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim().length > 10) {
			const newFeedback = {
				id: uuidv4(),
				text,
				rating,
			};
			handleAdd(newFeedback);
			setText('');
		}
	};

	return (
		<Card>
			<h2>How would you rate your service with us?</h2>
			<form onSubmit={handleSubmit}>
				<RatingSelect select={(rating) => setRating(rating)} />
				<div className='input-group'>
					<label htmlFor='review' hidden></label>
					<input onChange={handleStateChange} value={text} type='text' id='review' placeholder='Write a review...' />
					<Button type='submit' version='primary' isDisabled={btnDisabled}>
						Send
					</Button>
				</div>

				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	);
}

export default FeedbackForm;
