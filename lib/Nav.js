import React from 'react';
import './Nav.css'

export default function Nav() {
  return (
    <div className="nav-container">
      <nav>
        <li className="list"> MEMBERS </li>
        <li className="list"> FACILITY </li>
        <div className="logo-decoration">
          <img src="images/white-text-logo.png" className='logo'/>
        </div>
        <li className="list"> TRAINERS </li>
        <li className="list"> CONTACT </li>
      </nav>
    </div>
  )
}