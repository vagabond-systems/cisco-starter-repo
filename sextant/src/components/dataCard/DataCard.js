import React from 'react'
import './dataCard.css'

const DataCard = ({dataTitle,choice}) => {
    return (
        <div className='card'>
            {/* <div className='imgBlock'>
                <img src='https://picsum.photos/200/300' className='dataImg' alt='testImg' />
            </div> */}
            <h3 className='dataTitle bold'>{choice}</h3>
            <h3 className='dataTitle'>{dataTitle}</h3>
        </div>
    )
}

export default DataCard
