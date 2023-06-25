import { GridItem, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const GridItemModified = ( {value, title} ) => {
  const cardBackgroundColor = useColorModeValue('white', '#262c3d');
  const cardHoverStyle = useColorModeValue({outline:'2px solid black', cursor: 'pointer'}, {outline:'2px solid white', cursor: 'pointer'});
  return (
    <GridItem w='100%' borderRadius='5px' boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;' padding={'0.75rem'} backgroundColor={cardBackgroundColor} _hover={cardHoverStyle}>
        <Text fontSize={["16px", "23px", "34px"]} fontWeight={'bold'}>{value}</Text>
        <Text>{title}</Text>
    </GridItem>
  )
}

export default GridItemModified