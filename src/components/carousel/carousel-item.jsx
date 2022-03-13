import React from 'react'

const CarouselItem = ({ data, width }) => {
  return (
    <div className='carousel-item' style={{ width }}>
      {data}
    </div>
  )
}

export default CarouselItem
