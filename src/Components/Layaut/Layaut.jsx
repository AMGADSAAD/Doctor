import React from 'react'
import Navbar from '../Nav/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'


const Layaut = () => {
  return (
    <div>
      <Navbar />
     
      <main>
       
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layaut




