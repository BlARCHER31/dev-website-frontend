import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './nav.css'

const NavBar = () => {
  const [isActive, setActive] = useState(false)

  const toggleClass = () => {
    setActive(!isActive)
  }
  return (
    <div className='navbar'>
      <p className='nav-title'> RiH</p>
      <div onClick={toggleClass} className='burger'>
        <AiOutlineMenu />
      </div>
      <div className={isActive ? 'sidebar sidebar-active' : 'sidebar'}>
        <Link className='nav-link' to=''>
          Products
        </Link>
        <Link className='nav-link' to=''>
          About
        </Link>
        <Link className='nav-link' to=''>
          Cart
        </Link>
        <Link className='nav-link' to=''>
          Contact
        </Link>
      </div>
    </div>
  )
}

export default NavBar
