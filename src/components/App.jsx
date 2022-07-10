import { Component } from 'react';
import Feedback from './Feedback';
import Statistics from './Statistics'
import Section from './Section';
import Notification from './Notificcation';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
 };

 handleClick = (name) => {
  return this.setState(prevState => ({ [name]: prevState[name] + 1 }))
 }

 countTotalFeedback = () => {
  const {good, neutral, bad} = this.state
  return good + neutral + bad
 }

 countPositiveFeedbackPercentage = () => {
  const {good, neutral, bad} = this.state
  if (!good) {
    return 0
  };
  const total = good + neutral + bad
  const result = good * 100 / total
  return Math.round(result)
 }

 render() {
   const {good, neutral, bad} = this.state
  return (
    <>
      <Section title='Please leave feedback'>
        <Feedback 
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleClick}
        />
      </Section>
      <Section title='Statistics'>
        {this.countTotalFeedback() === 0 
        ? <Notification message='No feedback given'/>
        :<Statistics 
          good={good}
          neutral={neutral}
          bad={bad} 
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
        }
      </Section>
    </>
    )
  }
}

export default App;