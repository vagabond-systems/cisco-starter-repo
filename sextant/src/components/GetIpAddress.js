import React, {useState, useEffect} from 'react';

// import axios for HTTP request
import axios from 'axios';

// APIs of ip
const URL = "https://api.ipify.org?format=json";
const URL6 = "https://api64.ipify.org?format=json";

function GetIpAddress(props) {

  const isIpv4 = props.isIpv4;
  console.log('is4 ', isIpv4)
  const [ipv4, setIpv4] = useState('');
  const [ipv6, setIpv6] = useState('');

  useEffect(() => {
    const LINK = isIpv4 ? URL : URL6;
    // if (isIpv4) console.log('ipv4')
    // else console.log('ipv6');
    axios.get(LINK)
      .then((response) => {
        if(isIpv4) setIpv4(response.data.ip);
        else setIpv6(response.data.ip);
      })
      .catch((error) => console.error(error));
  }, [])

  return (
    <div id="IpAddress" className="bg-slate-50 hover:bg-slate-200">
      <h1>{isIpv4 ? 'ipv4: ' + ipv4 : 'ipv6: ' + ipv6}</h1>
    </div>
  )
}

export default GetIpAddress;