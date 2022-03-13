import React from 'react'
import './product.css'

const ProductCard = ({ price, img, title }) => {
  return (
    <div className='product-card'>
      <img src={img} alt='' className='product-img' />
      <p className='product-title'>{title}</p>
      <p className='product-price'>{price}</p>
    </div>
  )
}

export default ProductCard
