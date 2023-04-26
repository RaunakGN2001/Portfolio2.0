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
              <LinkedInLogo classname = 'socialsLogo' />
              <GithubLogo classname = 'socialsLogo' />
              <TwitterLogo classname = 'socialsLogo' />
          </Box>
          <Text marginBottom={'1rem'} marginTop={'1rem'} color={'gray.400'} paddingTop={'1rem'} fontSize={'14px'}>Made with ❤️ by <a href={'https://github.com/RaunakGN2001'}>RaunakGN2001 ↗ </a> </Text>
        </Box>
    </Box>
  )
}

export default Footer