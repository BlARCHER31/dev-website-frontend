import React, { useState, useEffect } from 'react'
import './slides.css'

const SlideShow = ({ data, interval = 3000 }) => {
  const [thumbnails, setThumbnails] = useState([])
  const [previousSlideData, setPreviousSlideData] = useState()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [nextSlideData, setNextSlideData] = useState()
  const [currentSlideData, setCurrentSlideData] = useState()

  useEffect(() => {
    setThumbnails(data)
    setCurrentSlideData(data[currentSlide])

    if (currentSlide > 0) {
      setPreviousSlideData(data[currentSlide - 1])
    } else {
      setPreviousSlideData(data[data.length - 1])
    }

    if (currentSlide === data.length - 1) {
      setNextSlideData(data[0])
    } else {
      setNextSlideData(data[currentSlide + 1])
    }

    const loop = setInterval(() => {
      if (currentSlide === data.length - 1) {
        setCurrentSlide(0)
      } else {
        setCurrentSlide(currentSlide + 1)
      }
    }, interval)
    return () => clearInterval(loop)
  }, [data, currentSlide, interval])

  function previous() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    } else {
      setCurrentSlide(thumbnails.length - 1)
    }
  }

  function next() {
    if (currentSlide === thumbnails.length - 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }

  return (
    <div className='slideshow'>
      <div className='slide-holder'>
        <div className='slide previous-slide'>
          <div className='slide-thumbnail'>{previousSlideData}</div>
        </div>
        <div className='slide current-slide'>
          <div className='slide-thumbnail'>{currentSlideData}</div>
        </div>
        <div className='slide next-slide'>
          <div className='slide-thumbnail'>{nextSlideData}</div>
        </div>
      </div>
      <div className='slideshow-controller'>
        <span onClick={previous}>Previous</span>
        <span onClick={next}>Next</span>
      </div>
    </div>
  )
}

export default SlideShow
