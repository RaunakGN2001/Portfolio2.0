import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Card, List, ListIcon, ListItem, Text, UnorderedList, useColorModeValue } from '@chakra-ui/react'
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
import { motion } from 'framer-motion'

import AccordionComponent from '@/components/organisms/accordion'
import Footer from './footer'
import CustomHeading from '@/components/organisms/customHeading'
import CustomLink from '@/components/organisms/customLink'
import CustomLinkSGPA from '@/components/organisms/customLinkSGPA'
import Navbar from '@/components/organisms/navbar'


const AboutMe = () => {

  const tableColorScheme = useColorModeValue('blackAlpha', 'whiteAlpha');

  return (
    <>
      <Navbar />
      <Box as={motion.div}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: "ease-in-out",
          stiffness: 260,
          damping: 20,
        }} fontWeight='medium' className='About-container' minHeight='90vh' paddingInline={{ sm: '5rem', md: '10rem', lg: '15rem' }} paddingTop='7rem' display='flex' flexDirection='column' alignItems={{ md: 'center', sm: 'center', lg: '' }}>


        <CustomHeading title={'About'} marginBottom={'1rem'} />
        <AccordionComponent />


        <Box width='full' marginTop='2rem' as={motion.div} initial={{ opacity: 0 }}
            whileInView={{opacity: 1 }} viewport={{ once: true }}>
          <Text fontWeight='medium'>Greetings and a warm welcome to you, dear visitor 👀 ! It's an absolute delight to e-meet you ✨ .</Text>
          <Text fontWeight='medium' marginTop='1rem'>Allow me to introduce myself: I am Raunak, a preFinal Year Student and an ambitious and enthusiastic Full-Stack Developer who is currently pursuing a Bachelor's Degree in <b>Electrical Engineering</b> from the esteemed <b>Indian Institute of Engineering Science and Technology, Shibpur.</b></Text>
          <Text fontWeight='medium' marginTop='1rem'>As an undergraduate student, I possess a profound passion for expanding my horizons and experimenting with novel ideas as I journey forward. Join me as we embark on an exciting voyage of discovery and innovation.</Text>


          <Box display='flex' alignItems='center' fontWeight='bold' marginBottom={'2rem'}>
            {/* <Text _hover={{ color: '#eb2d72' }} marginTop='1rem' textDecor='underline' transition='100ms ease-in-out' ><Link href=''>My Resume ↗ </Link></Text> */}
            <CustomLink text='Resume' url='' marginTop='1rem' />
          </Box>


          <CustomHeading title={'Achievements'} marginBottom={'1rem'} />
          <Box as={motion.div} initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} paddingInline='1rem' marginTop='1rem' >
            <UnorderedList className='Achievements-list'>
              <ListItem><Text>600+ problems solved in <CustomLink text='Leetcode' url='' marginTop='' />, <CustomLink text='CodeChef' url='' marginTop='' /> and <CustomLink text='Codeforces' url='' marginTop='' /> combined.</Text></ListItem>
              <ListItem><Text><b>4 star</b> rated in CodeChef ( Max Rating: 1974 - Old Rating System )</Text></ListItem>
              <ListItem><Text><b>Pupil</b> in Codeforces ( Max Rating: 1255 )</Text></ListItem>
              <ListItem><Text>Secured <b>Global Rank 768</b> in January Cook-Off 2022 Division 2.</Text></ListItem>
              <ListItem><Text>Cleared <b>Qualification Round with 44 points</b> enabling me to proceed to Round 1 where I secured a <b>Global Rank of 7975</b> in the renowned <CustomLink text='Google Code Jam 2022' url='' marginTop='' /></Text></ListItem>
              <ListItem><Text>My team <b>Binary Beasts</b> despite being a two-person team, achieved a <b>Global Ranking of 2580</b> in the prestigious <CustomLink text='Google Hash Code Competition 2022' url='' marginTop='' /></Text></ListItem>
              <ListItem><Text>Our team secured the <b>second position</b> in the Mini Project Competition organized by our university, IIEST Shibpur. Our project, which utilized <b>Computer Vision to control Illumination of Electrical Appliances</b>, was a unique and innovative solution that impressed the judges and audience alike. It was a testament to the hard work and creativity of our team.</Text></ListItem>
            </UnorderedList>
          </Box>


          <Text as={motion.div}  initial={{opacity: 0 }}
            whileInView={{opacity: 1 }} marginTop='3rem' fontSize={["17px", "24px", "35px"]} fontWeight='bold' borderBottom='1px solid black' width='full' id='Academics'>Academics</Text>
          <Text as={motion.div} initial={{opacity: 0 }}
            whileInView={{opacity: 1 }} marginTop='1rem'><b>CGPA:</b>  8.11 / 10 <Text display={'inline-block'} color='gray.500'>( till 5th Sem )</Text></Text>

          <TableContainer as={motion.div} initial={{opacity: 0 }}
            whileInView={{opacity: 1 }} marginTop={'2rem'} border={'1px solid black'} font>
            <Table size={'md'} variant={'striped'} colorScheme={tableColorScheme}>
              <Thead>
                <Tr>
                  <Th>Semester</Th>
                  <Th>SGPA</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td><CustomLinkSGPA text='1st' url='' marginTop='' /></Td>
                  <Td>9.38</Td>
                </Tr>
                <Tr>
                  <Td><CustomLinkSGPA text='2nd' url='' marginTop='' /></Td>
                  <Td>8.46</Td>
                </Tr>
                <Tr>
                  <Td><CustomLinkSGPA text='3rd' url='' marginTop='' /></Td>
                  <Td>8.77</Td>
                </Tr>
                <Tr>
                  <Td><CustomLinkSGPA text='4th' url='' marginTop='' /></Td>
                  <Td>7.54</Td>
                </Tr>
                <Tr>
                  <Td><CustomLinkSGPA text='5th' url='' marginTop='' /></Td>
                  <Td>6.43</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Text as={motion.div} initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} fontSize={["13px", "18px", "23px"]} fontWeight={'bold'} marginTop={'1rem'}>Courses Taken:</Text>
          <Box as={motion.div} initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} paddingInline='1rem' marginTop={'0.5rem'} fontWeight={'medium'}>
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
        <Footer />
      </Box>
    </>
  )
}

export default AboutMe