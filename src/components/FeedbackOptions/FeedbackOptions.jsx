export const FeedbackOptions = ({ text, clickHandler }) => {
  return (
    <button type="button" onClick={clickHandler}>
      {text}
    </button>
  );
};
