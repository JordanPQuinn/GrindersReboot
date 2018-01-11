import React from 'react';
import Nav from './Nav.js';
import Gallery from './Gallery.js';

export default class App extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
    <div id="app">
      <Nav />
      <Gallery />
    </div> 
    )
  }
}