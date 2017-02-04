/* jshint esversion: 6 */
import React, {Component} from 'react';
import TruckList from './TruckList';

class TruckApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <TruckList />
    );
  }
}

export default TruckApp;
