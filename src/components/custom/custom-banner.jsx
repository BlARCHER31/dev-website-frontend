import React from 'react'
import Button from '../button/button'
import './custom.css'

const CustomBanner = () => {
  return (
    <div className='custom-banner'>
      <p className='custom-banner-description'>Design and Customize Your Sign</p>
      <Button name={'secondary-btn'} label={'Design'} />
    </div>
  )
}

export default CustomBanner
