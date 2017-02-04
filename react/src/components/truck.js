/* jshint esversion: 6 */
import React, { Component } from 'react';

class Truck extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <li className="truck-list-item">
        <span className="truck-name">
          {this.props.truck.name}
        </span>
      </li>
    )
  }
}

export default Truck;
