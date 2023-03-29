import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IpDisplay from './IpDisplay';
import WebSocketComponent from "./WebSocket"

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit heading="Public IPv4 Address" children={<IpDisplay url="https://api.ipify.org?format=json"/>} />
      <Exhibit heading="Public IPv6 Address" children={<IpDisplay url="https://api64.ipify.org?format=json"/>} />
      <Exhibit heading="Latency" children={<WebSocketComponent />} />
    </div>
  );
}

export default App;
