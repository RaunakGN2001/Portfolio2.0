import CustomHeading from '@/components/organisms/customHeading'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Projects = () => {
  return (
    <Box fontWeight='medium' className='About-container' minHeight='90vh' paddingInline={{ sm: '5rem', md: '10rem', lg: '15rem' }} paddingTop='3rem' display='flex' flexDirection='column' alignItems={{ md: 'center', sm: 'center', lg: '' }}>
        <CustomHeading title={'Projects'} marginBottom={'3rem'} />

    </Box>
  )
}

export default Projects