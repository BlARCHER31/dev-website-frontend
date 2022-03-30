import React from 'react'
import { IoChevronForward } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import './nav.css'

const NavTab = ({ showNav, onClose }) => {
  return (
    <div className={showNav ? 'sidebar sidebar-active' : 'sidebar'}>
      {
        <IoChevronForward
          onClick={onClose}
          size={48}
          className='sidebar-toggle'
        />
      }

      <Link className='nav-link' to='/'>
        Home
      </Link>
      <Link className='nav-link' to='/products'>
        Products
      </Link>
      <Link className='nav-link' to=''>
        About
      </Link>
      <Link className='nav-link' to='/cart'>
        Cart
      </Link>
      <Link className='nav-link' to=''>
        Contact
      </Link>
    </div>
  )
}

export default NavTab
