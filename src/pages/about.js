import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Card, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import React from 'react'

const AboutMe = () => {
  return (
    <Box className='About-container' minHeight='90vh' paddingInline={{sm:'5rem', md:'10rem', lg:'15rem'}} paddingTop='3rem' display='flex' flexDirection='column' alignItems={{md:'center', sm:'center', lg:''}}>
      <Text fontSize={["17px", "24px", "35px"]} fontWeight='bold' borderBottom='1px solid black' width='full'>About</Text>

        <Accordion marginTop='1rem' minWidth='full' color='black' defaultIndex={[0]} allowMultiple background='blackAlpha.300'>
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
                <ListItem _hover={{textDecoration: 'underline', cursor: 'pointer'}}><ListIcon as={ChevronRightIcon} />
                  <a href=''>About</a>
                </ListItem>

                <ListItem _hover={{textDecoration: 'underline',  cursor: 'pointer'}}><ListIcon as={ChevronRightIcon} />
                  Achievements
                </ListItem>
                <ListItem _hover={{textDecoration: 'underline',  cursor: 'pointer'}}>
                  <ListIcon as={ChevronRightIcon} />
                  Academics</ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

      <Box width='full' marginTop='2rem'>
        <Text>Greetings and a warm welcome to you, dear visitor 👀 ! It's an absolute delight to e-meet you ✨ .</Text>
        <Text marginTop='1rem'>Allow me to introduce myself: I am Raunak, a preFinal Year Student and an ambitious and enthusiastic Full-Stack Developer who is currently pursuing a Bachelor's Degree in <b>Electrical Engineering</b> from the esteemed <b>Indian Institute of Engineering Science and Technology, Shibpur.</b></Text>
      </Box>
    </Box>
  )
}

export default AboutMe