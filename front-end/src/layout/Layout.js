import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className='container'>
        <Navbar/>

        <div className='container bg-light min-vh-100 my-3 p-3'>
            <Outlet/>  {/* To render the current route selected */}
        </div>
          
        <Footer/>

    </div>
  )
}
