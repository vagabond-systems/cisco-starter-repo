// src/Title.js

import React from 'react'
import './Title.css';
import logo from './logo.jpg';

function Title() {
  return (
    <div className="title">
        <div className='imgLogo'>
            <img src={logo} className="App-logo" alt="Logo"/>
        </div>
        <div className='headerTitle'>
            <h1>SEKSTANT FRONTEND</h1>
            <br/>
            <h3>Student Sviatoslav Pechenevskyi</h3>
        </div>
    </div>
  )
}

export default Title