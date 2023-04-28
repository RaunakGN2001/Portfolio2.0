import { Text } from '@chakra-ui/react'
import React from 'react'

const CustomHeading = ( { title, marginBottom } ) => {
  return (
    <Text fontSize={["17px", "24px", "35px"]} fontWeight='bold' borderBottom='1px solid black' width='full' marginBottom={marginBottom}>{title}</Text>
  )
}

export default CustomHeading