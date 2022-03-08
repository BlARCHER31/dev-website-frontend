import React from 'react'
import './collections.css'
import Banner from './../banner/banner'

const CollectionCard = ({ image, banner }) => {
  return (
    <div className='collection-card'>
      <img className='collection-image' src={image} alt='Category' />
      <Banner title={banner} />
    </div>
  )
}

export default CollectionCard
