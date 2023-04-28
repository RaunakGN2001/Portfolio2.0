import { Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const CustomHeading = ( { title, marginBottom } ) => {
  const borderBottom = useColorModeValue('1px solid black', '1px solid gray')
  const textColor = useColorModeValue('black', 'white')
  return (
    <Text fontSize={["17px", "24px", "35px"]} fontWeight='bold' borderBottom={borderBottom} width='full' marginBottom={marginBottom} color={textColor}>{title}</Text>
  )
}

export default CustomHeading