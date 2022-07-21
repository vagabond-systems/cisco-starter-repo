import React from 'react'
import './topBanner.css'

const TopBanner = ({title}) => {
  return (
    <div className='bannerWrapper'>
        <div className='title'>
        {title}
        </div>
        <div>
            <a href='https://www.cisco.com/c/en_in/index.html' rel="noopener noreferrer" target='_blank'>
              <img src='cisco-logo.png' className='imgLogo' alt='cisco' />
            </a>
        </div>
    </div>
  )
}

export default TopBanner
