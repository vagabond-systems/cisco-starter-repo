
import React from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit title="IP Metrics">
        {/* IP metrics components here */}
      </Exhibit>
      <Exhibit title="Latency Metrics">
        {/* latency metrics components here */}
      </Exhibit>
    </div>
  );
}

import './App.css';




export default App;
