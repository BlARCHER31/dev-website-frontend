import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CollectionCard from './collection-card'
import productHandler from '../../services/products'
import './collections.css'

const Collections = () => {
  const [collections, setCollections] = useState()

  useEffect(() => {
    async function fetchCategories() {
      let response = await productHandler.getCollections()
      setCollections(response)
    }
    fetchCategories()
  }, [])

  return (
    <div className='collections'>
      <h2 className='title'>Collections</h2>
      <div className='collection-card-group'>
        {collections
          ? collections.map(collection => (
              <Link
                to={`/products/collections/${collection.name}/${collection.id}`}
              >
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
