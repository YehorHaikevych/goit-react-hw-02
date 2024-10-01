import Styles from "./Options.module.css";

const Options = ({ onAddImpression, onResetFeedback, totalFeedback }) => {
  return (
    <div className={Styles.box}>
      <button className={Styles.btn} onClick={() => onAddImpression("good")}>
        Good
      </button>
      <button className={Styles.btn} onClick={() => onAddImpression("neutral")}>
        Neutral
      </button>
      <button className={Styles.btn} onClick={() => onAddImpression("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={Styles.btn} onClick={onResetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
