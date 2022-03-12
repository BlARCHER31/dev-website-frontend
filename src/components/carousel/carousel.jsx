import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { FaRegCircle, FaCircle } from 'react-icons/fa'
import './carousel.css'

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const updateIndex = newIndex => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0
    }

    setActiveIndex(newIndex)
  }

  return (
    <div className='carousel'>
      <div
        className='inner'
        style={{ transform: `translateX(-${activeIndex * 25}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '25%' })
        })}
      </div>
      <div className='indicators'>
        <IoIosArrowBack
          onClick={() => {
            updateIndex(activeIndex - 1)
          }}
        />
        {React.Children.map(children, (child, index) => {
          return index === activeIndex ? (
            <FaCircle
              onClick={() => {
                updateIndex(index)
              }}
            />
          ) : (
            <FaRegCircle
              onClick={() => {
                updateIndex(index)
              }}
            />
          )
        })}

        <IoIosArrowForward
          onClick={() => {
            updateIndex(activeIndex + 1)
          }}
        />
      </div>
    </div>
  )
}

export default Carousel
