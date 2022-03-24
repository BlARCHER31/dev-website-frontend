import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import fetchProduct from '../../services/products'
import { FiShoppingCart } from 'react-icons/fi'
import cartHandler from '../../services/cart'
import './product.css'

const ProductPage = ({ cart, setCart }) => {
  const [product, setProduct] = useState()
  let { id } = useParams()

  useEffect(async () => {
    let response = await fetchProduct.getProduct(id)

    console.log(response.data[0])
    setProduct(response.data[0])
  }, [])
  // const product = {
  //   title: 'Lets Get Cozy',
  //   img: img,
  //   price: 45,
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facilis minima, laudantium accusantium cumque saepe asperiores.',
  //   dimensions: `45" x 45"`,
  // }
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
                onClick={() => cartHandler.addToCart(product.id, cart, setCart)}
                size={28}
              />
            </p>
          </span>
        </React.Fragment>
      ) : (
        <h3></h3>
      )}
    </div>
  )
}

export default ProductPage
