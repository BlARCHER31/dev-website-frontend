import React from 'react'

const CarouselItem = ({ children, width }) => {
  return (
    <div className='carousel-item' style={{ width }}>
      {children}
    </div>
  )
}

export default CarouselItem
