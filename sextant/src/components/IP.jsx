import React, { useEffect, useState } from "react";


const IP = ({ipVal, ..._val}) => {
    const address = {ipv4: 'https://api.ipify.org?format=json', ipv6: 'https://api.ipify.org?format=json'}
    const [ip, setIp] = useState("")
    useEffect(()=>{
         fetch(address[ipVal])
        .then((response) => response.json())
        .then((data) => setIp(data.ip))

    },[])

    return ( ip.length ? <h4 className="primary_color">your {ipVal} address is {ip} </h4> : <p>loading...</p>)
}
export default IP;