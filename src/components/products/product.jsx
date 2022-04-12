import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import fetchProduct from '../../services/products'
import ProductCard from './product-card'

const Products = () => {
  const [products, setProducts] = useState()
  let { collectionName, collectionID } = useParams()
  useEffect(async () => {
    if (!collectionID) {
      let response = await fetchProduct.getAllProducts()
      setProducts(response.data)
    } else {
      let response = await fetchProduct.getProductsInGenre(collectionID)
      setProducts(response.data)
    }
  }, [])
  return (
    <div className='products'>
      <h3 className='title'>
        {collectionName ? collectionName + ' Collection' : 'All Collections'}
      </h3>
      <div className='products-list'>
        {products
          ? products.map(product => (
              <ProductCard
                product={product}
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
