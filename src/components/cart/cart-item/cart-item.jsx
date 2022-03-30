import React from 'react'

const CartItem = ({ cartInfo, classPrefix }) => {
  return (
    <div className={`${classPrefix}-item`}>
      <img
        className={`${classPrefix}-img`}
        src={cartInfo.product.img_url}
        alt={cartInfo.product.title}
      />
      <p className={`${classPrefix}-title`}>{cartInfo.product.title}</p>
      <p className={`${classPrefix}-product-price`}>Price: {cartInfo.product.price}</p>
      <p className={`${classPrefix}-count`}>Quantity: {cartInfo.count}</p>
    </div>
  )
}

export default CartItem
