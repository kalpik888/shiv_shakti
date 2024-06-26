import React from 'react'
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer.jsx";
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
    <div>
       <Navbar />
        <Outlet />
        <Footer />
    </div>
    )
  }
  
  export default Layout
