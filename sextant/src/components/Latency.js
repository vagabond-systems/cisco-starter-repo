import React, { useState } from 'react'

function Latency() {
    const time=new Date()
    const [latency,setLatency]=useState('')
    const websoc=new WebSocket('ws://localhost:55455')
    websoc.onopen=()=>{
        console.log('connected')
    }
    websoc.onmessage = (message) => {
        setLatency(time.getTime()-message.timeStamp);
      };
  return (
    <div>
        The packet latency is:{latency}
    </div>
  )
}

export default Latency