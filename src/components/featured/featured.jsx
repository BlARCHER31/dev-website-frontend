import React from 'react'
import './featured.css'
import ProductCard from '../products/product-card'
import img from './images/mr-mrs-wood-sign.jpg'
import lastNameImg from './images/91xl-6xnLNL._SL1500_.jpg'
import letsGetCozy from './images/lets-get-cozy.webp'
import together from './images/together.jpg'

const Featured = () => {
  return (
    <div className='featured'>
      <h2 className='title'>Featured</h2>
      <div className='featured-products'>
        <ProductCard
          price={'$65'}
          img={img}
          title={`Mr and Mrs w/ Last Name`}
        />
        <ProductCard
          price={'$50'}
          img={lastNameImg}
          title={`Custom Family Name`}
        />
        <ProductCard
          price={'$85'}
          img={letsGetCozy}
          title={`Life is Beautiful`}
        />
        <ProductCard price={'$35'} img={together} title={`Together`} />
      </div>
    </div>
  )
}

export default Featured
