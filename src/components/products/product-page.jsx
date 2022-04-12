import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import fetchProduct from '../../services/products'
import { FiShoppingCart } from 'react-icons/fi'
import cartHandler from '../../services/cart'
import './product.css'
import Spinner from '../spinner/spinner'

const ProductPage = ({ cart, setCart }) => {
  const [product, setProduct] = useState()
  let { id } = useParams()

  useEffect(async () => {
    let response = await fetchProduct.getProduct(id)
    setProduct(response.data[0])
  }, [])

  return (
    <div className='product'>
      {product ? (
        <React.Fragment>
          <h2 className='title'>{product.title}</h2>

          <img
            src={product.img_url}
            alt={product.title}
            className='product-page-img'
          />
          <span className='product-page-description'>
            <p>{product.description}</p>
            {/* <p className='product-page-dimensions'>
    Dimensions: {product.dimensions}
  </p> */}
            <p className='product-page-price'>
              ${product.price}{' '}
              <FiShoppingCart
                className='cart-icon'
                onClick={() => cartHandler.addToCart(product, cart, setCart)}
                size={28}
              />
            </p>
          </span>
        </React.Fragment>
      ) : (
        <Spinner title={'Getting Products'} />
      )}
    </div>
  )
}

export default ProductPage
