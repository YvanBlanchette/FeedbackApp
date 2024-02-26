import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import Header from './components/Header';
import Footer from './components/Footer';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  // State to hold the feedback data
  const [feedback, setFeedback] = useState(FeedbackData)

  //Function to delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Êtes-vous sûr(e) de vouloir supprimer ce commentaire ?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  //Function to add feedback
  const addFeedback = (newFeedback) => {
    console.log(newFeedback)
    setFeedback([newFeedback, ...feedback]);
  }

  return (
    <FeedbackProvider>
      <Header backgroundColor="rgba(255, 255, 255, 0.25)" />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
      <Footer backgroundColor="rgba(0, 0, 0, 0.5)" />
    </FeedbackProvider>
  );
}

export default App;
