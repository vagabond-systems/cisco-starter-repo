import './App.css';
import Banner from './components/Banner.js';
import Dashboard from './components/dashboard/Dashboard.js';
import React, { useState, useEffect } from 'react';

// import axios for HTTP request
import axios from 'axios';

const exhibits = [
  'Metric 1',
  'Metric 2',
  'Metric 3',
  'Metric 4'
]

const URL = "https://api.ipify.org?format=json";

function App() {
  const [ipv4, setIpv4] = useState('');

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  }, [])

  return (
    <div className="App">
      <Banner />
      <Dashboard exhibits={exhibits}/>
    </div>
  );
}

export default App;
