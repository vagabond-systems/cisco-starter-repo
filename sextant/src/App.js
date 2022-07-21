import { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Panel from './components/panel/Panel';
import TopBanner from './components/topBanner/TopBanner';

function App() {
  const [ipChoice,setIpChoice] = useState(null);

  return (
    <div className="App">
      <TopBanner title={'Sextant'} />
      <section>
        <h3 className='tabTitle'>
          Public IP
        </h3>
        <div>
          <button className='btn ' onClick={()=>setIpChoice('IPv4')}>IPv4</button>
          <button className='btn' onClick={()=>setIpChoice('IPv6')}>IPv6</button>
        </div>
      </section>
      {ipChoice && <Panel choice={ipChoice} />}
      <Footer />
    </div>
  );
}

export default App;
