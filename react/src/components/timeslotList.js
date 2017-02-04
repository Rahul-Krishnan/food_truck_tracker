/* jshint esversion: 6 */
import React, { Component } from 'react';
import Timeslot from './Timeslot';

class TimeslotList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    let timeslots = this.props.timeslots.map(timeslotElement => {
      let className = "";
      if(this.props.selectedTimeslotId === timeslotElement.id) {
        className="selected";
      }
      let handleTimeslotSelect = () => {
        this.props.handleTimeslotSelect(timeslotElement.id);
      };

      return(
        <Timeslot
          key={timeslotElement.id}
          name={timeslotElement.name}
          className={className}
          handleTimeslotSelect={handleTimeslotSelect}
        />
      )
    })
    return(
      <ul>
        {timeslots}
      </ul>
    )
  }
}
export default TimeslotList
