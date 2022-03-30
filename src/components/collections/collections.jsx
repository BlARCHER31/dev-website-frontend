import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CollectionCard from './collection-card'
import scriptureImage from './images/scripture-sign.jpeg'
import furnitureImage from './images/painted-table.jpg'
import homeImage from './images/home-decor-sign.jpg'
import productHandler from '../../services/products'
import './collections.css'

const Collections = () => {
  const [collections, setCollections] = useState()

  useEffect(async () => {
    let response = await productHandler.getCollections()
    setCollections(response)
  }, [])

  return (
    <div className='collections'>
      <h2 className='title'>Collections</h2>
      <div className='collection-card-group'>
        {collections
          ? collections.map(collection => (
              <Link to={`/products/collections/${collection.name}/${collection.id}`}>
                <CollectionCard
                  key={collection.name}
                  image={collection.img_url}
                  banner={collection.name}
                />
              </Link>
            ))
          : null}
      </div>
    </div>
  )
}

export default Collections
