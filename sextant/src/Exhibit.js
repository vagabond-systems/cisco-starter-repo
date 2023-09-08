import React from 'react';
import './Exhibit.css';

function Exhibit({ title, children }) {
  return (
    <div className="exhibit">
      <h2>{title}</h2>
      <div className="exhibit-content">{children}</div>
    </div>
  );
}

export default Exhibit;
