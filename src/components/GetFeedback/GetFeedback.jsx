import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const GetFeedback = () => {
  const [results, setResults] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const { good, neutral, bad } = results;

  const total = good + neutral + bad;

  const positiveFeedbackPercentage = () => {
    const goodPercentage = ((good / total) * 100).toFixed(2);
    return Number(goodPercentage);
  };

  const onBtnClick = name => {
    setResults(prevState => {
      return { ...prevState, [name]: prevState[name] + 1 };
    });
  };

  const positiveFeedback = positiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onBtnClick={onBtnClick} />
      </Section>
      <Section title="Statistics">
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
};

export default GetFeedback;
