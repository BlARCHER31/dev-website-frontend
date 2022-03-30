import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import NavTab from './nav-tab'
import './nav.css'
import CartTab from './../cart/cart-tab/cart-tab'
import cartHandler from '../../services/cart'

const NavBar = ({ cart, setCart }) => {
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

  const showCartCount = () => {
    return cart && cart.length > 0 ? 'cart-count-active' : 'cart-count'
  }
  return (
    <div className='navbar'>
      <Link className='nav-title nav-link' to='/'>
        RiH
      </Link>
      <span className='nav-btn'>
        <div onClick={toggleCart} className='cart-icon'>
          <span className='cart-and-count'>
            <HiOutlineShoppingCart />
            <div className={showCartCount()}>
              {cart ? cartHandler.getCartCount(cart) : null}
            </div>
          </span>
        </div>
        <div onClick={toggleNav} className='burger'>
          <AiOutlineMenu />
        </div>
      </span>
      <div className={showCart ? 'cart-tab cart-tab-active' : 'cart-tab'}>
        <CartTab
          showCart={showCart}
          onClick={toggleCart}
          onClose={sideToggleClick}
          setCart={setCart}
          cart={cart}
        />
      </div>

      <NavTab showNav={showNav} onClick={toggleNav} onClose={sideToggleClick} />
    </div>
  )
}

export default NavBar
