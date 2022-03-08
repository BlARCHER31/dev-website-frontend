import React from 'react'
import Hero from '../hero/hero'
import NavBar from './../nav/nav'
import Collections from '../collections/collections'
import Featured from '../featured/featured'

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Collections />
      <Featured />
    </React.Fragment>
  )
}

export default Home
