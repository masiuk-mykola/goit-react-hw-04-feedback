import { useContext } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { feedbackContext } from './FeedbackContext/FeedbackContext';

export const Feedback = () => {
  const { total } = useContext(feedbackContext);

  return (
    <>
      <Section title={'Please leave your feedback'}>
        <FeedbackOptions />
      </Section>

      {total > 0 ? (
        <Section title={'Statistics'}>
          <Statistics />
        </Section>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </>
  );
};
