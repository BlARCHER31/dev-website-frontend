import React from 'react'
import Button from '../button/button'
import { Link } from 'react-router-dom'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero grid grid-2x1'>
      <h1 className='hero-title'>Repurposed in Him</h1>
      <Link to='/products'>
        <Button name={'hero-btn primary-btn'} label={'Shop'} />
      </Link>
    </div>
  )
}
export default Hero
