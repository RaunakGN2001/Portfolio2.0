import GithubLogo from '@/components/SVG/github'
import GithubLogoLarge from '@/components/SVG/githubLarge'
import InstagramLogoLarge from '@/components/SVG/instagramLarge'
import LinkedInLogo from '@/components/SVG/linkedin'
import LinkedInLogoLarge from '@/components/SVG/linkedinLarge'
import TwitterLogo from '@/components/SVG/twitter'
import TwitterLogoLarge from '@/components/SVG/twitterLarge'
import CustomHeading from '@/components/organisms/customHeading'
import Navbar from '@/components/organisms/navbar'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'

const Guestbook = () => {
    return (
        <>
        <Navbar />
        <Box as={motion.div} 
      initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{
      type: 'ease-in-out',
      stiffness: 260,
      damping: 20,
    }} fontWeight='medium' className='About-container' minHeight='90vh' paddingInline={{base:'1.5rem', sm: '5rem', md: '10rem', lg: '15rem' }} paddingTop='7rem' display='flex' flexDirection='column'>
            <CustomHeading title={'Contact Me'} marginBottom={'1.5rem'} />

            <Text fontSize={["15px", "17px", "20px"]} marginBottom={'1.5rem'}>I'm thrilled 😄 that you're interested in connecting with me. If you have any questions, comments, or just want to say hello, please don't hesitate to reach out. </Text>

            <Text fontSize={["15px", "17px", "20px"]}>You can find my socials below: </Text>

            <Box display='flex' justifyContent={'center'} gap='2rem' marginTop='2rem' marginBottom={'2.5rem'}>
                <LinkedInLogoLarge classname='socialsLogoInContactPage' />
                <GithubLogoLarge classname='socialsLogoInContactPage' />
                <TwitterLogoLarge classname='socialsLogoInContactPage' />
                <InstagramLogoLarge classname='socialsLogoInContactPage' />
            </Box>

            <Text marginBottom={'1.5rem'} fontSize={["15px", "17px", "20px"]}>Additionally, if you prefer to send an email, you can reach me at <Link _hover={{ color: '#d81159',textDecoration:'underline' }} fontWeight={'bold'} href='mailto:raunakgn.careers@gmail.com'>raunakgn.careers@gmail.com<ExternalLinkIcon mx='2px' /></Link>. I'll do my best to respond as quickly as possible.</Text>

            <Text fontSize={["15px", "17px", "20px"]}>Thank you 🙏🏼 for taking the time to visit my portfolio, and I'm looking forward to hearing from you!" ✨ </Text>
        </Box>
        </>
    )
}

export default Guestbook