import React from 'react'

import ReviewComment from './review-comment'
import './reviews.css'

const Reviews = () => {
  return (
    <div className='reviews'>
      <h2 className='title'>Reviews</h2>
      <ReviewComment />
      <ReviewComment />
      <ReviewComment />
      <ReviewComment />
    </div>
  )
}

export default Reviews
