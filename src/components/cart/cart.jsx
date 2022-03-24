import React, { useState, useEffect } from 'react'
import { IoChevronForward } from 'react-icons/io5'
import cartHandler from '../../services/cart'
import CartItem from './cart-item'
import './cart.css'

const Cart = ({ onClose, showCart, cart }) => {
  const [cartInfo, setCartInfo] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(async () => {
    if (cart) {
      const productIds = cart.map(cartItem => {
        return cartItem.productId
      })
      let response = await cartHandler.getCartItems(JSON.stringify(productIds))
      setCartInfo(response)
    }
  }, [cart])

  return (
    <div className={showCart ? 'cart cart-active' : 'cart'}>
      <p className='title'>Cart</p>
      {cart ? (
        cartInfo.map(cartItem => <CartItem cartInfo={cartItem} />)
      ) : (
        <p className='title'>Cart is Empty</p>
      )}
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
