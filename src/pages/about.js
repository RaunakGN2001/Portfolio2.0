import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Card, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'

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


        <Text marginTop='3rem' fontSize={["17px", "24px", "35px"]} fontWeight='bold' borderBottom='1px solid black' width='full' id='Achievements'>Achievements</Text>
        <Box paddingInline='1rem' marginTop='1rem' >
          <ul className='Achievements-list'>
            <li><Text>600+ problems solved in <a className='links' href='/'>Leetcode ↗</a>, <a href='' className='links'>CodeChef ↗</a> and <a href='' className='links'>Codeforces ↗</a> combined.</Text></li>
            <li><Text><b>4 star</b> rated in CodeChef ( Max Rating: 1974 - Old Rating System )</Text></li>
            <li><Text><b>Pupil</b> in Codeforces ( Max Rating: 1255 )</Text></li>
            <li><Text>Secured <b>Global Rank 768</b> in January Cook-Off 2022 Division 2.</Text></li>
            <li><Text>Cleared <b>Qualification Round with 44 points</b> enabling me to proceed to Round 1 where I secured a <b>Global Rank of 7975</b> in the renowned <b>Google Code Jam 2022</b></Text></li>
            <li><Text>My team <b>Binary Beasts</b> despite being a two-person team, achieved a <b>Global Ranking of 2580</b> in the prestigious <b>Google Hash Code Competition 2022</b></Text></li>
            <li><Text>Our team secured the <b>second position</b> in the Mini Project Competition organized by our university, IIEST Shibpur. Our project, which utilized <b>Computer Vision to control Illumination of Electrical Appliances</b>, was a unique and innovative solution that impressed the judges and audience alike. It was a testament to the hard work and creativity of our team." </Text></li>
          </ul>
        </Box>


        <Text marginTop='3rem' fontSize={["17px", "24px", "35px"]} fontWeight='bold' borderBottom='1px solid black' width='full' id='Academics'>Academics</Text>
        <Text marginTop='1rem'><b>CGPA:</b>  8.11 / 10 <Text display={'inline-block'} color='gray.500'>( till 5th Sem )</Text></Text>

        <TableContainer marginTop={'2rem'} border={'1px solid black'} font>
          <Table size={'md'} variant={'striped'} colorScheme='blackAlpha'>
            <Thead>
              <Tr>
                <Th>Semester</Th>
                <Th>SGPA</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1st</Td>
                <Td>9.38</Td>
              </Tr>
              <Tr>
                <Td>2nd</Td>
                <Td>8.46</Td>
              </Tr>
              <Tr>
                <Td>3rd</Td>
                <Td>8.77</Td>
              </Tr>
              <Tr>
                <Td>4th</Td>
                <Td>7.54</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <Text fontSize={["13px", "18px", "23px"]} fontWeight={'bold'} marginTop={'1rem'}>Courses Taken:</Text>
        <Box paddingInline='1rem' marginTop={'0.5rem'} fontWeight={'medium'}>
          <ul className='Course-list'>
            <li><Text>Digital Electronics</Text></li>
            <li><Text>Analog Electronics</Text></li>
            <li><Text>Signal and Systems</Text></li>
            <li><Text>Electrical Machines</Text></li>
            <li><Text>Power Electronics</Text></li>
            <li><Text>Control Systems</Text></li>
            <li><Text>Microprocessor and Microcontroller</Text></li>
            
          </ul>
        </Box>


      </Box>

    </Box>
  )
}

export default AboutMe