import React from 'react'
import Latency from './Latency'
import Network from './Network'
function Exhibit() {
  return (
    <div>
        <Network protocol='ipv6'/>
        <Network protocol='ipv4'/>
        <Latency/>
    </div>
  )
}

export default Exhibit