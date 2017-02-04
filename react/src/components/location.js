/* jshint esversion: 6 */
import React, { Component } from 'react';

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <li className={this.props.className} onClick={this.props.handleLocationSelect}>{this.props.name} - {this.props.artist}</li>
    )
  }
}
export default Location;
