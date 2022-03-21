import React, { useState, useEffect } from 'react'
import fetchProduct from '../../services/products'
import ProductCard from './product-card'

const Products = ({ addToCart, removeFromCart, cart }) => {
  const [products, setProducts] = useState()

  useEffect(async () => {
    let response = await fetchProduct.getAllProducts()
    setProducts(response.data)
    console.log(response.data)
  }, [])
  return (
    <div className='products'>
      <h3 className='title'>Products</h3>
      <div className='products-list'>
        {products
          ? products.map(product => (
              <ProductCard
                cart={cart}
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                key={product.id}
                id={product.id}
                price={product.price}
                img={product.img_url}
                title={product.title}
              />
            ))
          : null}
      </div>
    </div>
  )
}

export default Products
