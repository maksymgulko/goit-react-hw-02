const Options = ({
  onGoodClick,
  onNeutralClick,
  onBadClick,
  onReset,
  totalFeedback,
}) => {
  return (
    <div>
      <button onClick={onGoodClick}>Good</button>
      <button onClick={onNeutralClick}>Neutral</button>
      <button onClick={onBadClick}>Bad</button>
      {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
};

export default Options;
