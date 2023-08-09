import React, { useState, useEffect } from 'react';
import WebSocketClient from 'websocket';

function LatencyDisplay() {
  const [latency, setLatency] = useState(null);
  const socket = new WebSocketClient.w3cwebsocket('ws://localhost:55455');

  useEffect(() => {
    socket.onmessage = (event) => {
      const packetTimestamp = JSON.parse(event.data).data.timestamp;
      const currentTimestamp = new Date().getTime();
      const packetLatency = currentTimestamp - packetTimestamp;
      setLatency(packetLatency);
    };

    // Clean up the WebSocket connection on component unmount
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <p>Packet Latency:</p>
      <p>{latency} ms</p>
    </div>
  );
}

export default LatencyDisplay;
