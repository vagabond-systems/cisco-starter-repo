import React, { useState, useEffect } from 'react';

const PacketLatency = () => {
    const [latency, setLatency] = useState(null);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:55455');

        ws.onopen = () => {
            console.log("Connected to Pylon");
        };

        ws.onmessage = (event) => {
            const packetTime = Number(event.data);
            const currentTime = new Date().getTime();
            const calculatedLatency = currentTime - packetTime;
        
            setLatency(calculatedLatency);
        };
        
    }, []);

    return (
        <div className="latency-container">
            {latency ? (
                <div>
                    <p>{latency} ms</p>
                </div>
            ) : ("")}
        </div>
    );
}

export default PacketLatency;
