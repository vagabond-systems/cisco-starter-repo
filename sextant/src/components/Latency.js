import React, { useState } from 'react'

function Latency() {
    const [latency,setLatency]=useState('')
    const websoc=new WebSocket('ws://localhost:55455')
    websoc.onopen=()=>{
        console.log('connected')
    }
    websoc.onmessage = (message) => {
        setLatency(new Date().getTime()-message.data);
      };
  return (
    <div>
        The packet latency is:{latency}
    </div>
  )
}

export default Latency