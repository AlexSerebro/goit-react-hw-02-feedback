import React, { Component } from 'react';
import {Section} from '../Section'
import { Button } from '../Button';
import style from './Feedback.module.css';

class Feedback extends React.Component{
  state={
    good:0,
    neutraj:0,
    bad:0,
  }
  handleClick = event =>{
    console.log('jjj');
  }
  render(){
    return(
      <div>
        <Section title='Please leave feedback'>
          <Button buttonNames={['Good', 'Neutral', 'Bad']} liaveFeesback={this.handleClick}/>

        </Section>
        <Section title='Statistics'>

        </Section>
        </div>

    )
  }
}


export default Feedback;