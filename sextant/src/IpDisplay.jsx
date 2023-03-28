import { useEffect, useState } from "react"

export default function IpDisplay(props) {
    const { url } = props
    const [ip, setIp] = useState("Loading...")

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setIp(data.ip))
    }, [])

    return (
        <p>{ip}</p>
    )
}