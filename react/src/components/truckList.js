/* jshint esversion: 6 */
import React, { Component } from 'react';
import Truck from './Truck';

class TruckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trucks: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getTrucks = this.getTrucks.bind(this);
  }

  componentDidMount() {
    this.getTrucks();
  }

  getTrucks() {
    fetch(`/api/v1/trucks.json`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status}, (${response.statusText})`;
        let error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      let trucks = body;
      this.setState({ trucks: trucks });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let trucks = [];
    this.state.trucks.forEach(function(truck) {
      trucks.push(
        <Truck
        key={truck.id}
        truck={truck}
        />
      );
    }.bind(this));
    return (
      <div>
        <ul className="truck-index">{trucks}</ul>
      </div>
    );
    debugger;
  }
}

export default TruckList;
