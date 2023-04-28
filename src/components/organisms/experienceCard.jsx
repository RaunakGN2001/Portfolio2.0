import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import CustomLink from './customLink';

const ExperienceCard = ( { name, period, role, imageURL, proofOfWork, responsibilities, lastCard } ) => {
    console.log(lastCard);

    const roleCardBG = useColorModeValue('blackAlpha.400', '#a61f50');
    const textColor = useColorModeValue('black', 'white');

  return (
    <Box borderBottom={'2px solid #efefef'} display={'flex'} flexDirection={['column', 'column', 'row']} width='100%' gap={'3rem'} marginBottom={'3rem'} paddingBottom={'3rem'}>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={'1rem'}>
            <img src={imageURL} width={'400px'} loading='lazy'/>
            <Text color={textColor} fontWeight={'medium'} fontSize={["15px", "17px", "20px"]}>{name}</Text>
        </Box>
        <Box>
            <Text backgroundColor={roleCardBG} textAlign={'center'} color={'white'} marginBottom={'1.5rem'} fontWeight={'bold'} fontSize={["15px", "17px", "20px"]}>{role} ︱ {period}</Text>
            <Box marginBottom='1rem'>
                {responsibilities.map((eachResp) => {
                    return <li>{eachResp}</li>
                })}
            </Box>
            <CustomLink text='Proof of Work' url={proofOfWork} marginTop='1rem' />
        </Box>        
    </Box>
  )
}

export default ExperienceCard