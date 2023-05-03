import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link } from '@chakra-ui/react'
import React from 'react'

const CustomLink = ( {text, url, marginTop} ) => {
  return (
    <Link fontSize={'18px'} textDecoration={'underline'} fontWeight={'extrabold'} href={url} target='_blank' _hover={{ color: '#eb2d72', textDecoration: 'underline' }} marginTop={marginTop}>{text} <ExternalLinkIcon mx='2px' /></Link>
  )
}

export default CustomLink