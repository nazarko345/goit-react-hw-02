import css from "./App.module.css";

import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import Notification from "../Notification/Notification.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import { useEffect, useState } from "react";

export default function App() {
  const [reviewType, setReviewType] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setReviewType({
      ...reviewType,
      [feedbackType]: reviewType[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setReviewType({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = reviewType.good + reviewType.neutral + reviewType.bad;

  const positiveFeedback = reviewType.good + reviewType.neutral;

  useEffect(() => {
    localStorage.setItem("reviewType", JSON.stringify(reviewType));
  }, [reviewType]);

  return (
    <div className={css.app}>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} />
      {!totalFeedback && <Notification />}
      {totalFeedback > 0 && (
        <Feedback
          count={reviewType}
          updateFeedback={updateFeedback}
          total={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
}
