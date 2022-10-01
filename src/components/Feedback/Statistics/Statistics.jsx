import { useContext } from 'react';
import { feedbackContext } from '../FeedbackContext/FeedbackContext';

export const Statistics = () => {
  const { good, neutral, bad, total, posFeedback } =
    useContext(feedbackContext);

  return (
    <>
      <p>
        Good: <span>{good}</span>
      </p>
      <p>
        Neutral: <span>{neutral}</span>
      </p>
      <p>
        Bad: <span>{bad}</span>
      </p>
      <p>
        Total: <span>{total}</span>
      </p>
      <p>
        Positive feedback: <span>{posFeedback}</span>
      </p>
    </>
  );
};
