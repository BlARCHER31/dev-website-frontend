import React from 'react'

const CartItem = ({ cartInfo }) => {
  return (
    <div className='cart-item'>
      <img className='cart-img' src={cartInfo.img_url} alt={cartInfo.title} />
      <p className='cart-title'>{cartInfo.title}</p>
      <p className='cart-product-price'>{cartInfo.price}</p>
    </div>
  )
}

export default CartItem
