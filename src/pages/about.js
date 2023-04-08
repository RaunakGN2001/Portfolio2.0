import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Card, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import AccordionComponent from '@/components/organisms/accordion'

const AboutMe = () => {
  return (
    <Box fontWeight='medium' className='About-container' minHeight='90vh' paddingInline={{ sm: '5rem', md: '10rem', lg: '15rem' }} paddingTop='3rem' display='flex' flexDirection='column' alignItems={{ md: 'center', sm: 'center', lg: '' }}>


      <Text fontSize={["17px", "24px", "35px"]} fontWeight='bold' borderBottom='1px solid black' width='full'>About</Text>
      <AccordionComponent />


      <Box width='full' marginTop='2rem'>
        <Text fontWeight='medium'>Greetings and a warm welcome to you, dear visitor 👀 ! It's an absolute delight to e-meet you ✨ .</Text>
        <Text fontWeight='medium' marginTop='1rem'>Allow me to introduce myself: I am Raunak, a preFinal Year Student and an ambitious and enthusiastic Full-Stack Developer who is currently pursuing a Bachelor's Degree in <b>Electrical Engineering</b> from the esteemed <b>Indian Institute of Engineering Science and Technology, Shibpur.</b></Text>
        <Text fontWeight='medium' marginTop='1rem'>As an undergraduate student, I possess a profound passion for expanding my horizons and experimenting with novel ideas as I journey forward. Join me as we embark on an exciting voyage of discovery and innovation.</Text>


        <Box display='flex' alignItems='center' _hover={{ color: '#0066b2' }} fontWeight='bold'>
          <Text marginTop='1rem' textDecor='underline' transition='100ms ease-in-out' ><Link href=''>My Resume ↗ </Link></Text>
        </Box>


        <Text marginTop='3rem' fontSize={["17px", "24px", "35px"]} fontWeight='bold' borderBottom='1px solid black' width='full'>Achievements</Text>
        <Box paddingInline='1rem' marginTop='1rem'>
          <ul className='Achievements-list'>
            <li><Text>600+ problems solved in <a className='links' href='/'>Leetcode ↗</a>, <a href='' className='links'>CodeChef ↗</a> and <a href='' className='links'>Codeforces ↗</a> combined.</Text></li>
            <li><Text>4 star rated in CodeChef ( Max Rating: 1974 - Old Rating System )</Text></li>
            <li><Text>Pupil in Codeforces ( Max Rating: 1255 )</Text></li>
          </ul>
        </Box>
      </Box>

    </Box>
  )
}

export default AboutMe