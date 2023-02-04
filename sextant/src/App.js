import './App.css';
import Banner from './components/Banner.js';
import GetIpAddress from './components/GetIpAddress.js';
import Dashboard from './components/dashboard/Dashboard.js';
import React, { useState, useEffect } from 'react';



const exhibits = [
  'Metric 1',
  'Metric 2',
  'Metric 3',
  'Metric 4'
]

function App() {
  const [isIpv4, setIsIpv4] = useState('false');

  return (
    <div className="App">
      <Banner />
      <GetIpAddress isIpv4={isIpv4}/>
      <Dashboard exhibits={exhibits}/>
    </div>
  );
}

export default App;
