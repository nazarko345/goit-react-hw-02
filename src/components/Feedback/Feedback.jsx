import css from "./Feedback.module.css";

export default function Feedback({ count, total, positiveFeedback }) {
  return (
    <div className={css.feadbackWrapper}>
      <p className={css.feadback}>✅Good: {count.good}</p>
      <p className={css.feadback}>🙂Neutral: {count.neutral}</p>
      <p className={css.feadback}>❌Bad: {count.bad}</p>
      <p className={css.feadback}>💯Total: {total}</p>
      <p className={css.feadback}>
        ✨Positive: {Math.round((positiveFeedback / total) * 100)}%
      </p>
    </div>
  );
}
