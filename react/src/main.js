/* jshint esversion: 6 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import TruckApp from './components/TruckApp';

$(function() {
  ReactDOM.render(
      <TruckApp />,
      document.getElementById('truck-app')
    );
  }
);
