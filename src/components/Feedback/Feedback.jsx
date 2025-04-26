import css from "./Feedback.module.css";

export default function Feedback({ count, total, positiveFeadback }) {
  return (
    <div className={css.feadbackWrapper}>
      <p className={css.feadback}>✅Good: {count.good}</p>
      <p className={css.feadback}>🙂Neutral: {count.neutral}</p>
      <p className={css.feadback}>❌Bad: {count.bad}</p>
      <p className={css.feadback}>💯Total: {total}</p>
      <p className={css.feadback}>✨Positive: {positiveFeadback}%</p>
    </div>
  );
}