import React, { useState, useEffect } from 'react';

function IPAddress({ type }) {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    const ipAddressType = type === 'ipv6' ? 'ipv6' : 'ipv4';
    fetch(`https://api64.ipify.org?format=json&${ipAddressType}=true`)
      .then(response => response.json())
      .then(data => setIpAddress(data[ipAddressType]));
  }, [type]);

  return (
    <div>
      <p>Your {type.toUpperCase()} address:</p>
      <p>{ipAddress}</p>
    </div>
  );
}

export default IPAddress;
