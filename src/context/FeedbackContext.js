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
    const response = await fetch('/feedback');
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
  const deleteFeedback = async (id) => {
    const confirmation = window.confirm('Êtes-vous sûr(e) de vouloir supprimer ce commentaire ?');
    // If the user confirms, delete the feedback
    if (confirmation) {
      await fetch(`/feedback/${id}`, {
        method: 'DELETE',
      });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  //Function to add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    setFeedback([data, ...feedback]);
  }


  // Function to edit feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item, //Item to edit
      edit: true, //Edit state
    });
  }

  // Update the feedback item
  const updateFeedback = async (id, updatedItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    });

    const data = await response.json();

    setFeedback(feedback.map(item => (item.id === id ? { ...item, ...data } : item))
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