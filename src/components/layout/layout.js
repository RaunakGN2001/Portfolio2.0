import React from 'react'
import Navbar from '../organisms/navbar'
import Footer from '@/pages/footer';
import { motion } from "framer-motion";


const Layout = ({ children }) => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  )
}

export default Layout;