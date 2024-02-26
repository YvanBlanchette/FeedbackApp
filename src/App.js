import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

function App() {
  // State to hold the feedback data
  const [feedback, setFeedback] = useState(FeedbackData)

  //Function to delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  //Function to add feedback
  const addFeedback = (newFeedback) => {
    console.log(newFeedback)
    setFeedback([newFeedback, ...feedback]);
  }

  return (
    <>
      <Header backgroundColor="rgba(255, 255, 255, 0.25)" />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
