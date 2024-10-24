import s from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      {totalFeedback > 0 ? (
        <div className={s.options}>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive: {positiveFeedback}%</p>
        </div>
      ) : (
        <p>No feedback yet</p>
      )}
    </div>
  );
};

export default Feedback;
