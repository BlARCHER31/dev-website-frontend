import React from 'react'
import { Link } from 'react-router-dom'
import './custom-banner.css'

const CustomBanner = () => {
  return (
    <div className='custom-banner'>
      <p className='custom-banner-description'>Design a Custom Sign</p>
      <Link to='/products/custom' className='secondary-btn'>
        Design
      </Link>
    </div>
  )
}

export default CustomBanner
