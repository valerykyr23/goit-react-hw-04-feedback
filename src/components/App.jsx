import React, { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';



export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  
  
  countTotalFeedback = () => {
    
    const arrayOfFeedbacks = Object.values(this.state);
    return arrayOfFeedbacks.reduce((total, currentValue) => { return total + currentValue }, 0);

  };

 

  countPositiveFeedbackPercentage = () => {
    
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    
  }

 leaveFeedback = (event) => { 
   const { name } = event.target;
   this.setState(state => ({ [name]: state[name] + 1 }));
     this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
    
  };

  
  
  render() {
  
    const { good, neutral, bad } = this.state;
    const totalF = this.countTotalFeedback();
    const positivePercents = this.countPositiveFeedbackPercentage();

    
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title="Please leave feedback">  
        
        <FeedbackOptions options={this.state} onLeaveFeedback={this.leaveFeedback}/>
        {totalF ? (<Statistics good={good} neutral={neutral} bad={bad} total={totalF} positivePercentage={positivePercents} />) :
(<Notification message="There is no feedback" />)}
        
          
          
      </Section>

      
    </div>)
}
  
}
 
