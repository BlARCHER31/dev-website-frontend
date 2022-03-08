import React from 'react'
import Button from '../button/button'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero grid grid-2x1'>
      <h1 className='hero-title'>Repurposed in Him</h1>
      <Button name={'hero-btn primary-btn'} label={'Shop'} />
    </div>
  )
}
export default Hero
