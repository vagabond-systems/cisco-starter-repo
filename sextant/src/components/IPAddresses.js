import React, { useState, useEffect } from 'react';

function IPAddresses({ version = 'ipv4' }){

    const [ip, setIp] = useState('');

    useEffect(() => {
        const fetchIp = async () => {
            let url = 'https://api64.ipify.org?format=text';
            const response = await fetch(url);
            const data = await response.text();
            setIp(data);
        };

        fetchIp();
    }, [version]);

    return (
        <div>
            {ip ? `Your ${version} address is: ${ip}` : 'Fetching IP address...'}
        </div>
    );
}

export default IPAddresses;
