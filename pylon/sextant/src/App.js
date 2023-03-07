import logo from './logo.svg';
import './App.css';
import React from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit';
import Map from './Map';
import Quote from './Quote';
import Image from './Image';
import IPAddress from './IPAddress';
function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit>
      <Map />
      </Exhibit>
      <Exhibit>
      <Quote />
      </Exhibit>
      <Exhibit>
      <Image />
      </Exhibit>
      <Exhibit>
        <IPAddress type="v4" />
      </Exhibit>
      <Exhibit>
        <IPAddress type="v6" />
      </Exhibit>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
