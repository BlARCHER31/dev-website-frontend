import React from 'react'
import { Link } from 'react-router-dom'

import './product.css'

const ProductCard = ({id, price, img, title }) => {
  return (
    <div className='product-card'>
      <Link to={`/product/${id}`}>
        <img src={img} alt='' className='product-img' />

        <p className='product-title'>{title}</p>
        <p className='product-price'>{price}</p>
      </Link>
    </div>
  )
}

export default ProductCard
