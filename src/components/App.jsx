import { Box } from './Box';
import { Feedback } from './Feedback/Feedback';
import { FeedbackContextProvider } from './Feedback/FeedbackContext/FeedbackContext';

export const App = () => {
  return (
    <FeedbackContextProvider>
      <Box p={25} textAlign="center" height={'100vh'}>
        <Feedback />
      </Box>
    </FeedbackContextProvider>
  );
};
