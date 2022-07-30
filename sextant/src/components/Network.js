import {React,useEffect,useState} from 'react'

function Network(props) {
    const [ipadd,setIp]=useState('')
 
    useEffect(()=>{
    if(props.protocol==='ipv6'){
        fetch('https://api.ipify.org')
            .then((response) => response.text())
            .then((data) =>setIp(data))
            .catch(err=>console.log(err))
    }else{
        fetch('https://api64.ipify.org')
            .then((response) => response.text())
            .then((data) =>setIp(data))
            .catch(err=>console.log(err))
    }
},[])
  return (
    <div>
        <p>Your {props.protocol} address is:{ipadd}</p>
        
    </div>
  )
}

export default Network