import React from 'react'
import Hero from '../hero/hero'
import Collections from '../collections/collections'
import Featured from '../featured/featured'
import AboutBanner from '../about/about-banner'
import CustomBanner from '../custom/custom-banner'

import Reviews from '../reviews/reviews'

const Home = ({ cart, setCart }) => {
  return (
    <React.Fragment>
      <Hero />
      <Collections />
      <AboutBanner />
      <Featured cart={cart} setCart={setCart} />
      <CustomBanner />
      <Reviews />
    </React.Fragment>
  )
}

export default Home
