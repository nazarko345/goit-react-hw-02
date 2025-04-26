import css from "./Options.module.css";
import clsx from "clsx";

export default function Options({ updateFeedback, resetFeedback, totalFeedback }) {
  return (
    <div className={css.optionsContainer}>
      <button
        onClick={() => {
          updateFeedback("good");
        }}
        className={clsx(css.goodBtn, css.basicBtn)}
      >
        ✅Good
      </button>
      <button
        onClick={() => {
          updateFeedback("neutral");
        }}
        className={clsx(css.neutlalBtn, css.basicBtn)}
      >
        🙂Neutral
      </button>
      <button
        onClick={() => {
          updateFeedback("bad");
        }}
        className={clsx(css.badBtn, css.basicBtn)}
      >
        ❌Bad
      </button>
      {totalFeedback && (
        <button
          onClick={resetFeedback}
          className={clsx(css.resetBtn, css.basicBtn)}
        >
          🔄Reset
        </button>
      )}
    </div>
  );
}
