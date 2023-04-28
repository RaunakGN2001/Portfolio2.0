import ExperienceCard from '@/components/organisms/experienceCard'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Footer from './footer';
import CustomHeading from '@/components/organisms/customHeading';

var nameArr, periodArr, roleArr, imageURLArr, proofOfWorkArr, responsibilitiesArr;


var experienceObject = require('../data/experience.json');

nameArr = experienceObject["name"];
periodArr = experienceObject["period"];
roleArr = experienceObject["role"];
imageURLArr = experienceObject["imageURL"];
proofOfWorkArr = experienceObject["proofOfWork"];
responsibilitiesArr = experienceObject["responsibilities"];

const Experiences = () => {

  return (
    <Box fontWeight='medium' className='About-container' minHeight='90vh' paddingInline={{ sm: '5rem', md: '10rem', lg: '15rem' }} paddingTop='3rem' display='flex' flexDirection='column' alignItems={{ md: 'center', sm: 'center', lg: '' }}>
      <CustomHeading title={'Experiences'} marginBottom={'3rem'} />

      <ExperienceCard name={nameArr[1]} period={periodArr[1]} role={roleArr[1]} imageURL={imageURLArr[1]} proofOfWork={proofOfWorkArr[1]} responsibilities={responsibilitiesArr[1]} lastCard={false} />

      <ExperienceCard name={nameArr[0]} period={periodArr[0]} role={roleArr[0]} imageURL={imageURLArr[0]} proofOfWork={proofOfWorkArr[0]} responsibilities={responsibilitiesArr[0]} lastCard={true} />

    <Footer />
    </Box>
  )
}

export default Experiences