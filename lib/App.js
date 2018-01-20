import React from 'react';
import Nav from './Nav';
import Gallery from './Gallery';
import Schedule from './Schedule';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      day: ''
    }
  }

  componentWillMount() {
    let d = new Date();
    let weekDay = 
      ['Sunday', 
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',]
    let currentDay = weekDay[d.getDay()];
    this.setState({
      day: currentDay
    })
  }

  render() {
    return (
    <div id="app">
      <Nav />
      <Gallery />
      <Schedule currentDay={this.state.day}/>
    </div> 
    )
  }
}