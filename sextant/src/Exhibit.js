// src/Exhibit.js

import React from 'react'
import './Exhibit.css';
import ClientIpv4 from './ClientIpv4';

function Exhibit() {
  return (
    <div className="exhibit">
        <h1>Exhibit</h1>
        <ClientIpv4 />
    </div>
  )
}

export default Exhibit