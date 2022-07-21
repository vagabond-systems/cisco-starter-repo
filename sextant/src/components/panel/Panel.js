import React, { useState } from 'react'
import DataCard from '../dataCard/DataCard'
import './panel.css'

const URL = 'https://api.ipify.org?format=json'
const URL64 = 'https://api64.ipify.org?format=json'

const Panel = ({choice}) => {

    const [publicIp,setPublicIp] = useState(null)

    const getIP = async (choice) =>{
        if(choice==='IPv4'){
            fetch(URL)
            .then(response => response.json())
            .then(data =>{ 
                // console.log(data.ip)
                setPublicIp(data.ip)
            });
        }

        if(choice==='IPv6'){
            fetch(URL64)
            .then(response => response.json())
            .then(data =>{ 
                // console.log(data.ip)
                setPublicIp(data.ip)
            });
        }

    }

    useState(()=>{
        const res = getIP(choice);
        setPublicIp(res.ip)
    },[choice])

    // const dataPoints = ['Public IP','Pylon Data']
    return (
        <div className='panelWrapper'>
            {publicIp && <DataCard choice={choice} dataTitle={publicIp} />}
        </div>
    )
}

export default Panel
