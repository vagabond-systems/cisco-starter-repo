import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='Content'>
        <p>42 is the answer to everything...</p>
      </div>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);