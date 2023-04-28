import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {}

  countPositiveFeedbackPercentage() {}
  render() {
    return (
      <section>
        <strong>Please leave feedback</strong>
        <ul>
          <li>
            <button type="button">Good</button>
          </li>
          <li>
            <button type="button">Neutral</button>
          </li>
          <li>
            <button type="button">Bad</button>
          </li>
        </ul>
        <h1>Statistics</h1>
        <ul>
          <li>
            Good:<span></span>
          </li>
          <li>
            Neutral:<span></span>
          </li>
          <li>
            Bad:<span></span>
          </li>
        </ul>
      </section>
    );
  }
}
