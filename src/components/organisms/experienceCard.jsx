import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const ExperienceCard = ( { name, period, role, imageURL, proofOfWork, responsibilities, lastCard } ) => {
    console.log(lastCard);
  return (
    <Box borderBottom={'2px solid #efefef'} display={'flex'} flexDirection={['column', 'column', 'row']} width='100%' gap={'3rem'} marginBottom={'3rem'} paddingBottom={'3rem'}>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={'1rem'}>
            <img src={imageURL} width={'400px'} loading='lazy'/>
            <Text fontWeight={'medium'} fontSize={["15px", "17px", "20px"]}>{name}</Text>
        </Box>
        <Box>
            <Text backgroundColor={'blackAlpha.400'} textAlign={'center'} color={'white'} marginBottom={'1.5rem'} fontWeight={'bold'} fontSize={["15px", "17px", "20px"]}>{role} ︱ {period}</Text>
            <Box>
                {responsibilities.map((eachResp) => {
                    return <li>{eachResp}</li>
                })}
            </Box>
            <Text textDecoration={'underline'} marginTop={'1rem'} fontWeight={'bold'}><a href={proofOfWork} target='_blank'>Proof of Work ↗ </a></Text>
        </Box>        
    </Box>
  )
}

export default ExperienceCard