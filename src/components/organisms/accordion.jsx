import React from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Card, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

const AccordionComponent = () => {
  return (
    <Accordion marginTop='1rem' minWidth='full' color='black' allowMultiple background='blackAlpha.300'>
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

              <ListItem _hover={{ textDecoration: 'underline', cursor: 'pointer' }}><ListIcon as={ChevronRightIcon} />
                Achievements
              </ListItem>
              <ListItem _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
                <ListIcon as={ChevronRightIcon} />
                Academics</ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
  )
}

export default AccordionComponent