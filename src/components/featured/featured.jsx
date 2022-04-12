import React, { useState, useEffect } from 'react'
import ProductCard from '../products/product-card'
import fetchProducts from '../../services/products'
import './featured.css'
import Spinner from '../spinner/spinner'

const Featured = () => {
  const [products, setFeaturedProducts] = useState()

  useEffect(async () => {
    let response = await fetchProducts.getFeaturedProducts()
    setFeaturedProducts(response.data)
  }, [])

  // const products = [
  //   {
  //     title: 'Lets Get Cozy',
  //     img: letsGetCozy,
  //     id: 1,
  //     price: 45,
  //     description:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facilis minima, laudantium accusantium cumque saepe asperiores.',
  //     dimensions: `45" x 45"`,
  //   },
  //   {
  //     title: `Mr and Mrs w/ Last Name`,
  //     img: img,
  //     id: 2,
  //     price: 65,
  //     description:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facilis minima, laudantium accusantium cumque saepe asperiores.',
  //     dimensions: `45" x 45"`,
  //   },
  //   {
  //     title: `Custom Family Name`,
  //     img: lastNameImg,
  //     id: 3,
  //     price: 50,
  //     description:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facilis minima, laudantium accusantium cumque saepe asperiores.',
  //     dimensions: `45" x 45"`,
  //   },
  //   {
  //     title: `Together`,
  //     img: together,
  //     id: 4,
  //     price: 35,
  //     description:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facilis minima, laudantium accusantium cumque saepe asperiores.',
  //     dimensions: `45" x 45"`,
  //   },
  // ]

  return (
    <div className='featured'>
      <h2 className='title'>Featured</h2>
      <div className='featured-products'>
        {products ? (
          products.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              img={product.img_url}
              price={product.price}
              title={product.title}
              product={product}
            />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  )
}

export default Featured
