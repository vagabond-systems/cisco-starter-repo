import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import './App.css';
import IPAddresses from './components/IPAddresses';
import PacketLatency from './components/PacketLatency';

function App() {
    return (
        <div className="app">
            <Banner />
            <Exhibit heading="Sample Exhibit">
                <div className="container">
                    <IPAddresses version="ipv4" />
                </div>
                
                <div className="container">
                    <IPAddresses version="ipv6" />
                </div>

                <div className="container">
                    <h3>Pylon Packet Latency Monitor</h3>
                    <PacketLatency />
                </div>
            </Exhibit>
        </div>
    );
}


export default App;
