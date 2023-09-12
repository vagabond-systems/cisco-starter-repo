import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import './App.css';
import IPAddresses from './components/IPAddresses';


function App() {

    return (
        <div className="app">
            <Banner />
            <Exhibit heading="Sample Exhibit">
            <div>
                    <IPAddresses version="ipv4" />
                    <IPAddresses version="ipv6" />
            </div>
            </Exhibit>
        </div>
    );

}

export default App;
