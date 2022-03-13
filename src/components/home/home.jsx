import React from 'react'
import Hero from '../hero/hero'
import NavBar from './../nav/nav'
import Collections from '../collections/collections'
import Featured from '../featured/featured'
import AboutBanner from '../about/about-banner'
import CustomBanner from '../custom/custom-banner'
import Footer from '../footer/footer'

import Reviews from '../reviews/reviews'

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Collections />
      <AboutBanner />
      <Featured />
      <CustomBanner />
      <Reviews />
      <Footer />
    </React.Fragment>
  )
}

export default Home
