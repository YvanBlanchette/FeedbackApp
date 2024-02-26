import { createContext, useState } from 'react';
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);


  //Function to delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Êtes-vous sûr(e) de vouloir supprimer ce commentaire ?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  //Function to add feedback
  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  }


  return <FeedbackContext.Provider value={{
    feedback, deleteFeedback, addFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext;