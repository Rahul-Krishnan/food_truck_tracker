/* jshint esversion: 6 */
import React, { Component } from 'react';

class Timeslot extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <li className={this.props.className} onClick={this.props.handleTimeslotSelect}>{this.props.name}</li>
    )
  }
}
export default Timeslot;
