import { useContext } from 'react';
import { feedbackContext } from '../FeedbackContext/FeedbackContext';

export const FeedbackOptions = () => {
  const { options, addFeedback } = useContext(feedbackContext);

  return (
    <>
      {options.map((item, id) => (
        <button key={id} type="button" onClick={() => addFeedback(item)}>
          {item}
        </button>
      ))}
    </>
  );
};
