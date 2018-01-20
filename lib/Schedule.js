import React from 'react';
import data from './ScheduleData';
import './Schedule.css';

export default class Schedule extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      selectedDay: this.props.currentDay
    }

    this.changeDay = this.props.changeDay.bind(this);
  }

  render() {
    let days = Object.keys(data)
    let currentDay = this.state.selectedDay;
    console.log(data[this.state.selectedDay])
    return(
      <div>
        <h1> Schedule </h1>
         <p> View Schedule For: </p>
          {
            days.map( day => {
              if(day === currentDay) {
                console.log('should update')
                return <li className="dayList selected" > {day} </li>
              } else { 
                return <li className="dayList" onClick={this.changeDay}> {day} </li>
              }
            })
          }
        <div>
          {
            data[this.state.selectedDay].map( item => {
              return(
                <div> {item} </div>
                )
            })
          }
        </div>
      </div>

    )
  }
}