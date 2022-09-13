import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const Feedback = () => {
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

  return (
    <>
      <Section title={'Please leave your feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={addFeedback}
        />
      </Section>

      {total > 0 ? (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={posFeedback}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </>
  );
};

// export class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   addFeedback = item => {
//     this.setState(prevState => ({
//       [item]: prevState[item] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     const positiveFeedback = Math.round((this.state.good * 100) / total);
//     return String(positiveFeedback) + '%';
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const posFeedback = this.countPositiveFeedbackPercentage();

//     return (
//       <>
//         <Section title={'Please leave your feedback'}>
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={this.addFeedback}
//           />
//         </Section>

//         {total > 0 ? (
//           <Section title={'Statistics'}>
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={posFeedback}
//             />
//           </Section>
//         ) : (
//           <Notification message="There is no feedback"></Notification>
//         )}
//       </>
//     );
//   }
// }
