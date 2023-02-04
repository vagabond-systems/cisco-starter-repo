import './App.css';
import Banner from './components/Banner.js';
import Dashboard from './components/dashboard/Dashboard.js';
import React, { useState, useEffect } from 'react';

const exhibits = [
  'Metric 1',
  'Metric 2',
  'Metric 3',
  'Metric 4'
]

function App() {

  return (
    <div className="App">
      <Banner />
      <Dashboard exhibits={exhibits}/>
    </div>
  );
}

export default App;
