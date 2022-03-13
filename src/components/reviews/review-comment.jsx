import React from 'react'

const ReviewComment = ({ description, name }) => {
  return (
    <div className='review-comment'>
      <p className='review-description'>{description}</p>
      <p className='review-name'>{name}</p>
    </div>
  )
}

export default ReviewComment
