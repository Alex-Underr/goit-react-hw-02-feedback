import { Component } from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  stateInput = e => {
    const x = e.currentTarget.textContent.toLowerCase();
    this.setState(prevState => ({ [x]: (prevState[x] += 1) }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }
  render() {
    return (
      <div>
        <Section title="Please, leave feedback">
          <button type="button" onClick={this.stateInput}>
            Good
          </button>
          <button type="button" onClick={this.stateInput}>
            Neutral
          </button>
          <button type="button" onClick={this.stateInput}>
            Bad
          </button>
        </Section>

        <Section title="Statistics">
          {!this.countTotalFeedback() > 0 ? (
            <Notification />
          ) : (
            <Section>
              <p>Good: {this.state.good}</p>
              <p>Neutral: {this.state.neutral}</p>
              <p>Bad: {this.state.bad}</p>
              <p>Total: {this.countTotalFeedback()}</p>
              <p>
                Positive feedback: {this.countPositiveFeedbackPercentage()}%
              </p>
            </Section>
          )}
        </Section>
      </div>
    );
  }
}
