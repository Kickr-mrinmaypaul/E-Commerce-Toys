import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Banner from '../components/banner/Banner';

function Layout() {
  return (
    <div>
        <div className="fixed top-0 left-0 w-full z-50">
            <Navbar />
        </div>
        <div className="pt-16">
            <Banner />
            <Outlet />
      </div>
    </div>
  )
}

export default Layout;