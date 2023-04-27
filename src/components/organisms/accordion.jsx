import React from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Card, List, ListIcon, ListItem, Text, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Link from 'next/link'

const AccordionComponent = () => {

  const backgroundAccordion = useColorModeValue('blackAlpha.300', '#a61f50')
  const textColor = useColorModeValue('black', 'white')



  return (
    <Accordion marginTop='1rem' minWidth='full' color={textColor} allowMultiple background={backgroundAccordion}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                Table of Contents
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List>

              <ListItem _hover={{ textDecoration: 'underline', cursor: 'pointer' }} ><ListIcon as={ChevronRightIcon} />
                <Link href={'#Achievements'}>Achievements</Link>
              </ListItem>
              <ListItem _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
                <ListIcon as={ChevronRightIcon} />
                <Link href={'#Academics'}>Academics</Link></ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
  )
}

export default AccordionComponent