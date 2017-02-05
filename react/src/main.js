/* jshint esversion: 6 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import TruckApp from './components/TruckApp';
import LocationApp from './components/LocationApp';
import TimeslotApp from './components/TimeslotApp';

$(function() {
  ReactDOM.render(
      <h1 className="menu">react shows up here guy</h1>,
      <TruckApp />,
      document.getElementById('truck-app')
    );
  }
);
