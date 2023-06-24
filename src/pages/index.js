import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/organisms/navbar'
import { Box, Link, Text, border, useColorModeValue } from '@chakra-ui/react'
import LinkedInLogo from '@/components/SVG/linkedin'
import GithubLogo from '@/components/SVG/github'
import TwitterLogo from '@/components/SVG/twitter'
import { motion } from 'framer-motion'
import useKeyboardShortcuts from '@/utils/KeyboardShortcuts'


const inter = Inter({ subsets: ['latin'] })


const MyImageOnLandingPage = (props) => {
  return (
    <Image
      // loader={myLoader}
      src="/me.jpg"
      alt="Picture of the author"
      width={200}
      height={200}
      blurDataURL='/me.jpg'
      loading='lazy'
    />
  )
}

export default function Home() {

  const backgroundImage = useColorModeValue('./images/dddepth-light.jpg', './images/dddepth-dark.jpg');

  const textColor = useColorModeValue('blackAlpha.600', 'whiteAlpha.600');

  return (
    <>
      <Navbar />
      <Head>
        <title>RaunakGn | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Box className='index_container' display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'100vh'} backgroundImage={backgroundImage} backgroundRepeat={'no-repeat'} backgroundSize={'cover'}>


        <Box as={motion.div}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{
            type: "ease-in-out",
            stiffness: 260,
            damping: 20,
          }} paddingTop='3rem' display='flex' flexDirection='column' justifyContent='center' alignItems='center' marginLeft='auto' marginRight='auto' width={['75%', '75%', '65%']}>
          <Box borderRadius='50%' overflow='hidden'>
            <MyImageOnLandingPage />
          </Box>
          <Text fontWeight='bold' marginTop='2rem' fontSize={["15px", "20px", "25px"]}>Hey there 👋 This is Raunak </Text>
          <Text fontSize={["12px", "15px", "17px"]} color={textColor} align='center' marginTop='1rem'>
            Technology Consulting Intern @ PwC · TA @ Coding Ninjas · EE @ IIEST Shibpur
          </Text>
          <Text fontSize={["12px", "15px", "17px"]} color={textColor}>· Tech Enthusiast · Student Developer
          </Text>
          <Box display='flex' gap='1.5rem' marginTop='2rem'>
            <Link href='https://www.linkedin.com/in/raunakgn/' target='_blank'><LinkedInLogo classname='socialsLogo' /></Link>
            <Link href='https://github.com/RaunakGN2001' target='_blank'><GithubLogo classname='socialsLogo' /></Link>
            <Link href='https://twitter.com/rnk_gn' target='_blank'><TwitterLogo classname='socialsLogo' /></Link>
          </Box>
        </Box>
      </Box>
    </>
  )
}
