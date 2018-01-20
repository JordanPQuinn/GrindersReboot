import React from 'react';
import './Gallery.css'

export default class Gallery extends React.Component {
  constructor() {
    super()

  }




  render() {
    return (
      <div className="gallery-container">
        <div className="image-container">
          <button className="left"></button>
          <button className="right"></button>
        </div>
      </div>
    )
  }
}