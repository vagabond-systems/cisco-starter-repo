import React from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IPAddress from './IPAddress';
import LatencyDisplay from './LatencyDisplay';

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit title="Public IPv4 Address">
        <IPAddress url='https://api.ipify.org?format=json' />
      </Exhibit>
      <Exhibit title="Public IPv6 Address">
        <IPAddress url='https://api64.ipify.org?format=json' />
      </Exhibit>
      <Exhibit title="Latency Metrics">
        <LatencyDisplay />
      </Exhibit>
    </div>
  );
}

export default App;
