import GithubLogo from '@/components/SVG/github'
import LinkedInLogo from '@/components/SVG/linkedin'
import TwitterLogo from '@/components/SVG/twitter'
import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <Box fontSize={["12px", "15px", "17px"]} marginTop={'4rem'} width='100%'>
         
        <Box borderTop='3px solid #efefef' display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}
        >
          <Box display='flex' justifyContent={'center'}  gap='1.5rem' marginTop='2rem'> 
            <Link href='https://www.linkedin.com/in/raunakgn/' target='_blank'><LinkedInLogo classname = 'socialsLogo' /></Link>
            <Link href='https://github.com/RaunakGN2001' target='_blank'><GithubLogo classname = 'socialsLogo' /></Link>
            <Link href='https://twitter.com/rnk_gn' target='_blank'><TwitterLogo classname = 'socialsLogo' /></Link>
          </Box>
          <Text marginBottom={'1rem'} marginTop={'1rem'} color={'gray.400'} paddingTop={'1rem'} fontSize={'14px'}>Powered by <Text fontWeight={'bold'} display={'inline-block'} color={'gray.700'}>Next.js</Text> and <Text fontWeight={'bold'} color={'gray.700'} display={'inline-block'}>Vercel</Text></Text>
        </Box>
    </Box>
  )
}

export default Footer