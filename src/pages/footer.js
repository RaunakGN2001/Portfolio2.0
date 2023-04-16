import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <Box fontSize={["12px", "15px", "17px"]} marginTop={'4rem'} width='100%' paddingInline={{ sm: '5rem', md: '10rem', lg: '15rem' }}>
        <Box borderTop='2px solid #efefef' display={'flex'} justifyContent={'center'} marginLeft={'auto'} marginRight={'auto'}>
            <Text paddingBottom={'1rem'} color={'gray.400'} paddingTop={'1rem'}>Made with ❤️ by <a href={'https://github.com/RaunakGN2001'}>RaunakGN2001 ↗ </a> </Text>
        </Box>
    </Box>
  )
}

export default Footer