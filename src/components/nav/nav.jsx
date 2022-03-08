import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import './nav.css'

const NavBar = () => {
  return (
    <div className='navbar'>
      <p className='nav-title'> RiH</p>
      <div className='burger'>
        <AiOutlineMenu />
      </div>
    </div>
  )
}

export default NavBar
