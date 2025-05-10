import React from 'react'
import Header from '../Componenet/Header'
import Footer from '../Componenet/Footer'
import { Outlet } from 'react-router-dom'


function Layout() {
  
  return (
    <div>
      <Header/>
      
      <Outlet/>
     
      <Footer/>
     
    </div>
  )
}

export default Layout
