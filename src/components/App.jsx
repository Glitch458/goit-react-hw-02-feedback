import { Component } from 'react';
import Feedback from './Feedback';
import Statistics from './Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
 };

 handleClick = (name) => {
  return this.setState(prevState => ({ [name]: prevState[name] + 1 }))
 }

 render() {
   const {good, neutral, bad} = this.state
  return (
    <div>
      <Feedback 
        names={Object.keys(this.state)}
        setValues={this.handleClick}
      />
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad} 
      />
    </div>
    )
  }
}

export default App;