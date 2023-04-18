import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const ExperienceCard = () => {
  return (
    <Box display={'flex'} width='100%' gap={'3rem'} marginTop={'3rem'}>
        <Box>
            <img src='https://placehold.co/150' />
            <Text fontWeight={'bold'} fontSize={["15px", "17px", "20px"]}>XYZ Company</Text>
        </Box>
        <Box>
            <Text fontWeight={'bold'} fontSize={["15px", "17px", "20px"]}>SDE Intern | Apr 2023 - May 2023 </Text>
            <Box>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </Box>
        </Box>        
    </Box>
  )
}

export default ExperienceCard