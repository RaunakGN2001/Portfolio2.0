import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link } from '@chakra-ui/react'
import React from 'react'

const CustomLinkSGPA = ( {text, url, marginTop} ) => {
  return (
    <Link fontWeight={'extrabold'} href={url} _hover={{ color: '#eb2d72', textDecoration: 'underline' }} marginTop={marginTop}>{text} <ExternalLinkIcon mx='2px' /></Link>
  )
}

export default CustomLinkSGPA