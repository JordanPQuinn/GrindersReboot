import React from 'react';
import data from './ScheduleData';
import './Schedule.css';

export default class Schedule extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      selectedDay: this.props.currentDay
    }

    this.selectDay = this.selectDay.bind(this);
  }

  selectDay(e) {
    this.setState({
      selectedDay: $(e.target).text()
    })
  }

  render() {
    let days = Object.keys(data)
    let currentDay = this.state.selectedDay;
    console.log(currentDay)
    return(
      <div>
        <h1> Schedule </h1>
         <p> View Schedule For: </p>
          {
            days.map( day => {
              if(day === currentDay) {
                return <li className="dayList selected" > {day} </li>
              } else{ return <li className="dayList" onClick={this.selectDay}> {day} </li>}
            })
          }
        <div>
          {
            data[this.props.currentDay].map( item => {
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