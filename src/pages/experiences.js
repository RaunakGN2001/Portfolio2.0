import ExperienceCard from '@/components/organisms/experienceCard'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Footer from './footer';
import CustomHeading from '@/components/organisms/customHeading';
import Navbar from '@/components/organisms/navbar';
import { motion } from 'framer-motion'



var experienceObject = require('../data/experience.json');

const nameArr = experienceObject["name"];
const periodArr = experienceObject["period"];
const roleArr = experienceObject["role"];
const imageURLArr = experienceObject["imageURL"];
const proofOfWorkArr = experienceObject["proofOfWork"];
const responsibilitiesArr = experienceObject["responsibilities"];

const Experiences = () => {

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
      <CustomHeading title={'Experiences'} marginBottom={'3rem'} />

      <ExperienceCard name={nameArr[1]} period={periodArr[1]} role={roleArr[1]} imageURL={imageURLArr[1]} proofOfWork={proofOfWorkArr[1]} responsibilities={responsibilitiesArr[1]} lastCard={false} />

      <ExperienceCard name={nameArr[0]} period={periodArr[0]} role={roleArr[0]} imageURL={imageURLArr[0]} proofOfWork={proofOfWorkArr[0]} responsibilities={responsibilitiesArr[0]} lastCard={true} />

    <Footer />
    </Box>
    </>
  )
}

export default Experiences