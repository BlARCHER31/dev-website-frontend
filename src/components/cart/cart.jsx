import React, { useState } from 'react'
import { IoChevronForward } from 'react-icons/io5'
import './cart.css'

const Cart = ({ onClose, showCart }) => {
  const [cart, addToCart] = useState([])
  return (
    <div className={showCart ? 'cart cart-active' : 'cart'}>
      {cart.length === 0 ? <p>Cart Empty</p> : <p>test</p>}
      {
        <IoChevronForward
          onClick={onClose}
          size={48}
          className='sidebar-toggle'
        />
      }
    </div>
  )
}

export default Cart
