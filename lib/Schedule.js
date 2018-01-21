import React from 'react';
import data from './ScheduleData';
import './Schedule.css';

export default class Schedule extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      day: '' 
    }

    this.selectDay = this.selectDay.bind(this);
  }

  selectDay(e) {
    let newDay = $(e.target).text()
    this.setState({
      day: newDay
    })
  }

  componentWillMount() {
     let weekDay = 
        ['Sunday', 
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',]
    if(!this.state.day) {
      let d = new Date();
      let currentDay = weekDay[d.getDay()];
      this.setState({
        day: currentDay
      });
    }
  }


  render() {
    let days = Object.keys(data)

    return(
      <div>
        <h1> Schedule </h1>
         <p> View Schedule For: </p>
          {
            days.map( day => {
              if(day == this.state.day) {
                console.log('yay!')
                return <li className="dayList selected" onClick={this.selectDay}>{day}</li>
              } else { 
                return <li className="dayList" onClick={this.selectDay}>{day}</li>
              }
            })
          }
        <div>
          {
            data[this.state.day].map( item => {
              return(
                <div> { item } </div>
                )
            })
          }
        </div>
      </div>
    )
  }
}