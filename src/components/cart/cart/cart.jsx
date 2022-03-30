import React, { useState, useEffect } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import cartHandler from '../../../services/cart'
import './cart.css'

const Cart = ({ cart, setCart, classPrefix }) => {
  const [cartTotal, setCartTotal] = useState()

  useEffect(() => {
    if (cart) {
      const newTotal = cartHandler.calculateCartTotal(cart)
      setCartTotal(newTotal)
    } else {
      setCartTotal(0)
    }
  }, [cart])

  return (
    <div className='cart'>
      {cart && cart.length > 0 ? (
        <React.Fragment>
          <p className='title'>Cart</p>
          <table className={`${classPrefix}-table`}>
            <tr className={`${classPrefix}-headers`}>
              <th></th>
              <th className={`${classPrefix}-title`}></th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
            {cart.map(cartItem => (
              <tr className={`${classPrefix}-data`} key={cartItem.product.id}>
                <td>
                  <img
                    className={`${classPrefix}-img`}
                    src={cartItem.product.img_url}
                    alt={cartItem.product.title}
                  />
                </td>
                <td className={`${classPrefix}-title`}>
                  {cartItem.product.title}
                </td>
                <td className={`${classPrefix}-price`}>
                  {cartItem.product.price}
                </td>
                <td className={`${classPrefix}-quantity`}>
                  <MdKeyboardArrowUp
                    className='quantity-indicator'
                    onClick={() =>
                      cartHandler.increaseProductCountByOne(
                        cartItem.product.id,
                        cart,
                        setCart
                      )
                    }
                  />
                  {cartItem.count}
                  <MdKeyboardArrowDown
                    className='quantity-indicator'
                    onClick={() =>
                      cartHandler.removeFromCart(
                        cartItem.product.id,
                        cart,
                        setCart
                      )
                    }
                  />
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <th>Total Cart Price</th>
                <th>{cartTotal}</th>
              </td>
            </tr>
          </table>
        </React.Fragment>
      ) : (
        <p className='title'>Cart is Empty</p>
      )}
    </div>
  )
}

export default Cart
