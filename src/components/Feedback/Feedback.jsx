import Styles from "./Feedback.module.css";

const FeedbackDisplay = ({
  feedbackType,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <div className={Styles.box}>
      <p>Good: {feedbackType.good}</p>
      <p>Nautral: {feedbackType.neutral}</p>
      <p>Bad: {feedbackType.bad}</p>
      <p>Total: {totalFeedback} </p>
      <p>Positive: {positiveFeedbackPercentage}% </p>
    </div>
  );
};

export default FeedbackDisplay;
