import React from 'react';

function Exhibit(props) {
  return (
    <div className="exhibit">
      <h2>{props.heading}</h2>
      {props.children}
    </div>
  );
}

export default Exhibit;
