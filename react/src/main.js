/* jshint esversion: 6 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

$(function() {
  ReactDOM.render(
    <h1>react shows up here guy</h1>
    <h2>here is smaller text</h2>,
    document.getElementById('app')
  );
});
