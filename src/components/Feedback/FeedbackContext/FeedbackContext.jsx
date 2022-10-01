import { createContext, useState } from 'react';
export const feedbackContext = createContext();

export const FeedbackContextProvider = ({ children }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = item => {
    switch (item) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positiveFeedback = Math.round((good * 100) / total);
    return String(positiveFeedback) + '%';
  };

  const total = countTotalFeedback();
  const posFeedback = countPositiveFeedbackPercentage();
  const options = ['good', 'neutral', 'bad'];

  return (
    <feedbackContext.Provider
      value={{ good, neutral, bad, addFeedback, total, posFeedback, options }}
    >
      {children}
    </feedbackContext.Provider>
  );
};
