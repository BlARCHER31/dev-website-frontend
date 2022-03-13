import React from 'react'

import ReviewComment from './review-comment'
import SlideShow from './../slides/slideShow'
import './reviews.css'

const Reviews = () => {
  const review = [
    {
      reviewer: 'Blake',
      review:
        'Wow these boards are amazing. All were delivered in a very timely manner.',
    },
    {
      reviewer: 'Devan',
      review:
        'Could not love my board any more than I do. Going up for everyone to see.',
    },
    {
      reviewer: 'Stella',
      review: 'This board is so perfect. It makes me feel like a princess.',
    },
    {
      reviewer: 'Esme',
      review: 'Dog. Dog. This. This. Dog.',
    },
  ]

  const reviewList = review.map(review => (
    <ReviewComment description={review.review} name={review.reviewer} />
  ))
  return (
    <div className='reviews'>
      <h2 className='title'>Reviews</h2>
      <SlideShow data={reviewList} interval={6500} />
    </div>
  )
}

export default Reviews
