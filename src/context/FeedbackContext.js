import { createContext, useState, useEffect } from 'react';
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // Loading state
  const [isLoading, setIsLoading] = useState(true);

  // Feedback state
  const [feedback, setFeedback] = useState([]);

  // Fetch feedback from JSON server
  useEffect(() => {
    fetchFeedback();
  }, []);

  // Function to fetch feedback from JSON server and put it in the feedback state
  const fetchFeedback = async () => {
    const response = await fetch('http://localhost:5000/feedback');
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  }

  // Feedback edit state
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });



  // Function to delete feedback
  const deleteFeedback = (id) => {
    const confirmation = window.confirm('Êtes-vous sûr(e) de vouloir supprimer ce commentaire ?');
    // If the user confirms, delete the feedback
    if (confirmation) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  //Function to add feedback
  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  }


  // Function to edit feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item, //Item to edit
      edit: true, //Edit state
    });
  }

  // Update the feedback item
  const updateFeedback = (id, updatedItem) => {
    setFeedback(feedback.map(item => (item.id === id ? { ...item, ...updatedItem } : item))
    );
  }

  // Rendering the component
  return <FeedbackContext.Provider value={{
    feedback, //Feedback state
    feedbackEdit, // Feedback edit state
    isLoading, // Loading state
    deleteFeedback, //Function to delete feedback
    addFeedback, //Function to add feedback
    editFeedback, //Function to edit feedback
    updateFeedback, // Function to update feedback
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext;