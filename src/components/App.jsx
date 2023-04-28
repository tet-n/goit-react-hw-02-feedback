import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getGoodFeedbackHandler = () => {
    this.setState(state => ({ good: state.good + 1 }));
  };

  getNeutralFeedbackHandler = () => {
    this.setState(state => ({ neutral: state.neutral + 1 }));
  };

  getBadFeedbackHandler = () => {
    this.setState(state => ({ bad: state.bad + 1 }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const feedbacks = good + neutral + bad;
    return feedbacks ? ((good / feedbacks) * 100).toFixed() : 0;
  }
  render() {
    const { good, neutral, bad } = this.state;
    // const feedbacks = good + neutral + bad;
    // const positiveFeedbacks = feedbacks
    //   ? ((good / feedbacks) * 100).toFixed()
    //   : 0;
    return (
      <div>
        {' '}
        <section>
          <strong>Please leave feedback</strong>
          <ul>
            <li>
              <button type="button" onClick={this.getGoodFeedbackHandler}>
                Good
              </button>
            </li>
            <li>
              <button type="button" onClick={this.getNeutralFeedbackHandler}>
                Neutral
              </button>
            </li>
            <li>
              <button type="button" onClick={this.getBadFeedbackHandler}>
                Bad
              </button>
            </li>
          </ul>
        </section>
        <section>
          <h1>Statistics</h1>
          <ul>
            <li>
              Good:<span>{good}</span>
            </li>
            <li>
              Neutral:<span>{neutral}</span>
            </li>
            <li>
              Bad:<span>{bad}</span>
            </li>
            <li>
              Total:<span>{this.countTotalFeedback()}</span>
            </li>
            <li>
              Positive feedbacks:
              <span>{this.countPositiveFeedbackPercentage()}%</span>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
