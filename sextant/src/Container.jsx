import React from 'react'

const Container = (props) => {
    return (
        <div className='container'>
            <div className='container-title'>{props.containerTitle}</div>
            {props.children}
        </div>
    )
}

export default Container