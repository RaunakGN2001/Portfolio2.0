import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import styles from '@/styles/Home.module.css'
import theme from '../theme'
import Navbar from '@/components/organisms/navbar'
import Layout from '@/components/layout/layout'
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {/* this is the div for the background  */}
      <div className={styles.center}></div>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
