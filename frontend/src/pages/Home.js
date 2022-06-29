import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import NavSide from '../components/NavSide/NavSide'

const Home = () => {
  return (
    <>
     <NavSide/>
      <Carousel/>
      <FeaturedProducts/>
      <Footer/>
    </>
  )
}

export default Home
