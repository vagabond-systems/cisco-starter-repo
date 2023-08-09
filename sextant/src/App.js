import React from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IPAddress from './IPAddress';

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit title="IP Metrics">
        <IPAddress type="ipv4" />
      </Exhibit>
      <Exhibit title="Latency Metrics">
        <IPAddress type="ipv6" />
      </Exhibit>
    </div>
  );
}

export default App;
