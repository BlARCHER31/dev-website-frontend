import React from 'react'
import Button from '../button/button'
import { Link } from 'react-router-dom'

import './product.css'

const ProductCard = ({
  cart,
  id,
  price,
  img,
  title,
  addToCart,
  removeFromCart,
}) => {
  return (
    <div className='product-card'>
      <Link to={`/product/${id}`}>
        <img src={img} alt='' className='product-img' />
      </Link>

      <p className='product-title'>{title}</p>
      <p className='product-price'>{price}</p>
      <Button
        onClick={() => addToCart(id)}
        name={'add-to-cart-btn'}
        label={'Add to Cart'}
      />
      <Button
        onClick={() => removeFromCart(id, cart)}
        name={'add-to-cart-btn'}
        label={'Remove From Cart'}
      />
    </div>
  )
}

export default ProductCard
