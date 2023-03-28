import { useState } from "react"

export default function WebSocketComponent() {
    const [latency, setLatency] = useState()
    const ws = new WebSocket("ws://localhost:55455")

    ws.addEventListener("message", (message) => {
        setLatency(new Date().getTime() - message.data)
    })

    return (
        <p>{latency}</p>
    )
}