import React from 'react'
import Navbar from '../organisms/navbar'

const Layout = ( {children} ) => {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
}

export default Layout;