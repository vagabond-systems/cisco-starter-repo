import './App.css';
import React, { Component } from "react";
import Banner from "./Banner";
import Exhibit from "./Exhibit";



function App() {
  return (
    <div className="App">
      <Banner bannerContent="Sextant"/>
      <Exhibit exhibitTitle="Exhibit A" latency="10"></Exhibit>
      <Exhibit exhibitTitle="Exhibit B" latency="150"></Exhibit>
      <Exhibit exhibitTitle="Exhibit C" latency="250"></Exhibit>
    </div>
  );
}

export default App;
