import React from 'react'
import './Exhibit.css'

const Exhibit = (props) => {
    return (
        <div className='Exhibit'>
            <div className='ExhibitHeading'>{props.exhibitTitle}</div>
            <div className="ExhibitContent">
                {props.children}
            </div>
        </div>
    )
}

export default Exhibit