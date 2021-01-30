import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistic = ({ label, value }) => (
  <tr>
    <td>{label} </td>
    <td>{value}</td>
  </tr>
);

const Feedback = ({ goodClick, neutralClick, badClick }) => {
  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={goodClick} text="good" />
      <Button handleClick={neutralClick} text="neutral" />
      <Button handleClick={badClick} text="bad" />
    </>
  );
};

const Statistics = ({ good, bad, neutral, all }) => {
  const getAverage = () => {
    return (good - bad) / all;
  };

  const getPositivePercentage = () => {
    return ((100 * good) / all).toString() + "%";
  };

  if (all > 0) {
    return (
      <>
        <h1>statistics</h1>
        <table>
          <tbody>
            <Statistic label="good" value={good} />
            <Statistic label="neutral" value={neutral} />
            <Statistic label="bad" value={bad} />
            <Statistic label="all" value={all} />
            <Statistic label="average" value={getAverage()} />
            <Statistic label="positive" value={getPositivePercentage()} />
          </tbody>
        </table>
      </>
    );
  }

  return (
    <>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const goodClick = () => {
    setGood(good + 1);
    setAll(all + 1);
  };

  const neutralClick = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  const badClick = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  return (
    <div>
      <Feedback
        goodClick={goodClick}
        neutralClick={neutralClick}
        badClick={badClick}
      />

      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
