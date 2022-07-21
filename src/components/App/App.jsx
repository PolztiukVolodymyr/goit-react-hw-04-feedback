import { useState } from "react";
import css from "./App.module.css";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Notification from "components/Notification/Notification";
import Section from "components/Section/Section";
import Statistics from "components/Statistics/Statistics";

const options = ["good", "neutral", "bad"];

export function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const leaveFeedback = evt => {
        let name = evt.target.name;

        if (name === "good") {
            setGood(val => val + 1)
        }
        if (name === "neutral") {
            setNeutral(val => val + 1)
        }
         if (name === "bad") {
            setBad(val => val + 1)
        }
    }

    const totalFeedback = good + neutral + bad;

    const countPositiveFeedbackPercentage = () => {
        return Math.round((good / totalFeedback) * 100);
    };


    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={leaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {!totalFeedback
            ? (<Notification message="There is no feedback" />)
            : (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            percentage={countPositiveFeedbackPercentage()}
          />)}
        </Section>
        
  
    </div>)
}