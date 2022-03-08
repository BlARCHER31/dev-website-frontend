import React from 'react'
import CollectionCard from './collection-card'
import scriptureImage from './images/scripture-sign.jpeg'
import furnitureImage from './images/painted-table.jpg'
import homeImage from './images/home-decor-sign.jpg'
import './collections.css'

const Collections = () => {
  return (
    <div className='collections'>
      <h2 className='title'>Collections</h2>
      <div className='collection-card-group'>
        <CollectionCard image={scriptureImage} banner={'Scripture'} />
        <CollectionCard image={furnitureImage} banner={'Furniture'} />
        <CollectionCard image={homeImage} banner={'Home Decor'} />
      </div>
    </div>
  )
}

export default Collections
