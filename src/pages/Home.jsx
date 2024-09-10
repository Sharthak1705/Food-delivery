import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import Fooditems from '../components/Fooditems'
import Card from '../components/Card'


const Home = () => {
  return (
    <>
          <Navbar />
          <CategoryMenu />
          <Fooditems />
          <Card />
       </>
  )
}

export default Home
