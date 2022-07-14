import React from 'react'
import DataCard from '../dataCard/DataCard'
import './panel.css'

const Panel = () => {
    const dataPoints = ['Public IP','Pylon Data']
    return (
        <div className='panelWrapper'>
            {dataPoints.map((dataPoint,index) => <DataCard key={index} dataTitle={dataPoint} />)}
        </div>
    )
}

export default Panel
