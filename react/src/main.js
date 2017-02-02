/* jshint esversion: 6 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

$(function() {
  ReactDOM.render(
    <h1>react shows up here guy</h1>,
    document.getElementById('app')
  );
});
