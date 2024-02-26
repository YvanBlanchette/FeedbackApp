import { FeedbackProvider } from './context/FeedbackContext';
import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';
import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';
import Footer from './components/Footer';

function App() {
  // Rendering the component
  return (
    <FeedbackProvider>
      <Header backgroundColor="rgba(255, 255, 255, 0.25)" />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </div>
      <Footer backgroundColor="rgba(0, 0, 0, 0.5)" />
    </FeedbackProvider>
  );
}

export default App;
