import React from 'react'
import Navbar from '../organisms/navbar'
import Footer from '@/pages/footer';

const Layout = ( {children} ) => {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
  )
}

export default Layout;