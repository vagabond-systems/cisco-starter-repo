import './App.css';
import './Banner';
import './Exhibit.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IP from './IP';
import Packet from './Packet';

function App() {
  return (
    <div className="App">
     <Banner bannerText="Sextant" />
                <Exhibit name="My IP Address IPv4">
                  <IP url='https://api64.ipify.org?format=json' />
                </Exhibit>
                <Exhibit name="My IP Address IPv6">
                  <IP url='https://api64.ipify.org?format=json' />
                </Exhibit>
                <Exhibit name="Pylon Packet Latency">
                    <Packet />
                </Exhibit>
                
    </div>
  );
}

export default App;
