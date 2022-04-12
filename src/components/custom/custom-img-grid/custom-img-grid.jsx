import React, { useState, useEffect } from 'react'
import './custom-img-grid.css'

const CustomImageGrid = ({
  customProduct,
  boardPhrase,
  style,
  setBoardStain,
}) => {
  const [activeProduct, setActiveProduct] = useState()

  const handleActive = product => {
    setActiveProduct(product)
  }
  useEffect(() => {
    setActiveProduct(customProduct[0])
  }, [])

  useEffect(() => {
    return activeProduct ? setBoardStain(activeProduct.img_url) : null
  }, [activeProduct])

  return (
    <div className='custom-img-grid'>
      {customProduct.map(productDetail => (
        <React.Fragment>
          <img
            key={productDetail.img_url}
            onClick={() => handleActive(productDetail)}
            className={
              'custom-product-img' +
              (activeProduct === productDetail ? '-active' : '')
            }
            src={productDetail.img_url}
            alt=''
          />

          {activeProduct === productDetail ? (
            <p className='custom-text' style={style}>
              {boardPhrase}
            </p>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  )
}

export default CustomImageGrid
