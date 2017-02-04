/* jshint esversion: 6 */
import React, { Component } from 'react';
import Location from './Location';

class LocationList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    let locations = this.props.locations.map(locationElement => {
      let className = "";
      if(this.props.selectedLocationId === locationElement.id) {
        className="selected";
      }
      let handleLocationSelect = () => {
        this.props.handleLocationSelect(locationElement.id);
      };

      return(
        <Location
          key={locationElement.id}
          name={locationElement.name}
          className={className}
          handleLocationSelect={handleLocationSelect}
        />
      )
    })
    return(
      <ul>
        {locations}
      </ul>
    )
  }
}
export default LocationList
