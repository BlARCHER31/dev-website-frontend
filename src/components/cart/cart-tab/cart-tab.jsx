import React from 'react'
import { Link } from 'react-router-dom'
import { IoChevronForward } from 'react-icons/io5'
import Cart from '../cart/cart'
import './cart-tab.css'

const CartTab = ({ onClose, cart, setCart }) => {
  return (
    <React.Fragment>
      {cart ? (
        <Cart cart={cart} setCart={setCart} classPrefix={'cart-tab'} />
      ) : (
        <p className='title'>Cart is Empty</p>
      )}
      {cart && cart.length > 0 ? (
        <Link className='primary-btn' to='/cart' onClick={onClose}>
          View Cart
        </Link>
      ) : null}
      {
        <IoChevronForward
          onClick={onClose}
          size={48}
          className='sidebar-toggle'
        />
      }
    </React.Fragment>
  )
}

export default CartTab
