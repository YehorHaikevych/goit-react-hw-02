import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import "./App.css";
import Notification from "./components/Notification/Notification";

export default function App() {
  const [feedbackType, setFeedbackType] = useState(() => {
    const savedFeedback = localStorage.getItem("feedbackType");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });
  const onAddImpression = (varsionImpression) => {
    setFeedbackType({
      ...feedbackType,
      [varsionImpression]: feedbackType[varsionImpression] + 1,
    });
  };

  const onResetFeedback = () => {
    setFeedbackType({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback =
    feedbackType.good + feedbackType.neutral + feedbackType.bad;

  const positiveFeedbackPercentage = totalFeedback
    ? Math.round((feedbackType.good / totalFeedback) * 100)
    : 0;

  useEffect(() => {
    localStorage.setItem("feedbackType", JSON.stringify(feedbackType));
  }, [feedbackType]);

  return (
    <div>
      <Description />
      <Options
        onAddImpression={onAddImpression}
        onResetFeedback={onResetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedbackType={feedbackType}
          totalFeedback={totalFeedback}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      )}
    </div>
  );
}
