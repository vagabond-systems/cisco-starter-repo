import React from 'react';


function Dashboard(props) {
  const exhibits = props.exhibits;
  return (
    <div id="dashboard" className="bg-slate-400">
      <h1>These are the dashboards</h1>
      {exhibits.length ? exhibits.map((exhibit, index) => {
        return (
          <div id="exhibit {index}" key={index} className="bg-slate-50 hover:bg-slate-200">
            <p>{exhibit}</p>
          </div>
        )}) : null}
    </div>
  )
}

export default Dashboard;