import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Cart from './../cart/cart'
import NavTab from './nav-tab'
import './nav.css'

const NavBar = ({ cart }) => {
  const [showNav, setShowNav] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const toggleNav = () => {
    setShowCart(false)
    setShowNav(!showNav)
  }

  const toggleCart = () => {
    setShowNav(false)
    setShowCart(!showCart)
  }

  const sideToggleClick = () => {
    setShowNav(false)
    setShowCart(false)
  }
  return (
    <div className='navbar'>
      <Link className='nav-title nav-link' to='/'>
        RiH
      </Link>
      <span className='nav-btn'>
        <div onClick={toggleCart} className='cart-icon'>
          <HiOutlineShoppingCart />
        </div>
        <div onClick={toggleNav} className='burger'>
          <AiOutlineMenu />
        </div>
      </span>

      <Cart
        showCart={showCart}
        onClick={toggleCart}
        onClose={sideToggleClick}
        cart={cart}
      />
      <NavTab showNav={showNav} onClick={toggleNav} onClose={sideToggleClick} />
    </div>
  )
}

export default NavBar
