import { Box, List, ListItem, Text } from '@chakra-ui/react'

import React from 'react'


const Navbar = () => {
  return (
    <Box width='100%' display='flex' justifyContent='space-between' alignItems='center' paddingLeft='7rem' paddingRight='7rem' paddingTop='1rem' paddingBottom='1rem'>
        <Box><Text fontSize={["21px", "25px", "21px"]} fontWeight='bold'>Raunak Gayen</Text></Box>
        <Box>
            <List fontSize={["12px", "15px", "17px"]} display='flex' gap='2rem'>
                <ListItem _hover={{fontWeight:'bold', cursor:'pointer'}}>About Me</ListItem>
                <ListItem _hover={{fontWeight:'bold', cursor:'pointer'}}>Experiences</ListItem>
                <ListItem _hover={{fontWeight:'bold', cursor:'pointer'}}>Projects</ListItem>
                <ListItem _hover={{fontWeight:'bold', cursor:'pointer'}}>Uses</ListItem>
            </List>
        </Box>
    </Box>
  )
}

export default Navbar