import React from 'react'
import Network from './Network'
function Exhibit() {
  return (
    <div>
        <Network protocol='ipv6'/>
        <Network protocol='ipv4'/>
    </div>
  )
}

export default Exhibit