/* jshint esversion: 6 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import TruckApp from './components/TruckApp';
import LocationApp from './components/LocationApp';
import TimeslotApp from './components/TimeslotApp';

$(function() {
  if (document.getElementById('truck-list')) {
    ReactDOM.render(
      debugger;
      <TruckApp />
      document.getElementById('truck-list')
    );
  }
  if (document.getElementById('location-list')) {
    ReactDOM.render(
      <h1 className="menu">react shows up here guy</h1>,
      <LocationApp />
      document.getElementById('location-list')
    );
  }
  if (document.getElementById('timeslot-list')) {
    ReactDOM.render(
      <h1 className="menu">react shows up here guy</h1>,
      <TimeslotApp />
      document.getElementById('timeslot-list')
    );
  }
  );
});
