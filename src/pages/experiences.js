import ExperienceCard from '@/components/organisms/experienceCard'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Footer from './footer';
import CustomHeading from '@/components/organisms/customHeading';
import Navbar from '@/components/organisms/navbar';
import { motion } from 'framer-motion'
import KeyboardShortcutsMenu from '@/components/organisms/keyboardShortcutsMenu';

const { experienceArr } = require('../data/experience');

const Experiences = () => {

  return (
    <>
      <KeyboardShortcutsMenu />
      <Navbar />
      <Box as={motion.div}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: "ease-in-out",
          stiffness: 260,
          damping: 20,
        }} fontWeight='medium' className='About-container' minHeight='90vh' paddingInline={{ base: '1.5rem', sm: '5rem', md: '10rem', lg: '15rem' }} paddingTop='7rem' display='flex' flexDirection='column' alignItems={{ md: 'center', sm: 'center', lg: '' }}>
        <CustomHeading title={'Experiences'} marginBottom={'3rem'} />
        <Box>
          {experienceArr.map(data => (
            <ExperienceCard name={data.name} companyURL={data.companyURL} period={data.period} role={data.role} imageURL={data.imageURL} proofOfWork={data.proofOfWork} responsibilities={data.responsibilities} lastCard={false} />
          ))}
        </Box>
        <Footer />
      </Box>
    </>
  )
}

export default Experiences