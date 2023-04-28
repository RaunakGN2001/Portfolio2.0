import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import styles from '@/styles/Home.module.css'
import theme from '../theme'
import Navbar from '@/components/organisms/navbar'
import Layout from '@/components/layout/layout'
import NextNProgress from 'nextjs-progressbar';
import { AnimatePresence } from 'framer-motion'


export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NextNProgress color='#eb2d72' />
      <AnimatePresence mode="wait" initial={false}>
      {/* this is the div for the background  */}
      <div className={styles.center}></div>
      <Layout>
      <Component {...pageProps} />
      </Layout>
      </AnimatePresence>
    </ChakraProvider>
  )
}
