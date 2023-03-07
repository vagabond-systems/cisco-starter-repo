import React, { useState, useEffect } from "react";

const IPAddress = ({ type }) => {
  const [ip, setIP] = useState("");

  useEffect(() => {
    const fetchIP = async () => {
      const response = await fetch(`https://api.ipify.org?format=${type}`);
      const data = await response.text();
      setIP(data);
    };

    fetchIP();
  }, [type]);

  return (
    <div>
      <h2>{`Your ${type.toUpperCase()} address is:`}</h2>
      <p>{ip}</p>
    </div>
  );
};

export default IPAddress;
