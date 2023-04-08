import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import styles from '@/styles/Home.module.css'
import theme from '../theme'
import Navbar from '@/components/organisms/navbar'
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {/* this is the div for the background  */}
      <Navbar />
      <div className={styles.center}> </div>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
