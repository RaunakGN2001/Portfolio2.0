import ExperienceCard from '@/components/organisms/experienceCard'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Experiences = () => {
  return (
    <Box fontWeight='medium' className='About-container' minHeight='90vh' paddingInline={{ sm: '5rem', md: '10rem', lg: '15rem' }} paddingTop='3rem' display='flex' flexDirection='column' alignItems={{ md: 'center', sm: 'center', lg: '' }}>
      <Text fontSize={["17px", "24px", "35px"]} fontWeight='bold' borderBottom='1px solid black' width='full'>Experiences</Text>

      <ExperienceCard />

    </Box>
  )
}

export default Experiences