import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'

const AboutBanner = () => {
  return (
    <div className='about-home-page'>
      <Link to='/about' className={'secondary-btn'}>
        MyStory
      </Link>
    </div>
  )
}

export default AboutBanner
