import React from 'react';
import Nav from './Nav';
import Gallery from './Gallery';
import Schedule from './Schedule';

export default class App extends React.Component {
  constructor() {
    super();

  }



  render() {
    return (
    <div id="app">
      <Nav />
      <Gallery />
      <Schedule />
    </div> 
    )
  }
}