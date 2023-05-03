import { Box, Text, Kbd, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import CustomLink from './customLink'
import { motion } from 'framer-motion'

const ProjectCard = ( { name, techStack, imageURL, githubLink, description } ) => {
  const cardBackgroundColor = useColorModeValue('white', '#262c3d');
  const techStackBackground = useColorModeValue('#262c3d', '#a61f50');
  const textColor = useColorModeValue('white', 'white');

  

  return (
    <Box as={motion.div} initial={{ x:100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} display={'flex'} flexDirection={'column'} width='100%' marginBottom={'3rem'} paddingBottom={'3rem'} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} padding={'1.5rem'} backgroundColor={cardBackgroundColor} > 
      <Box>
          <img src={imageURL} />
      </Box>
      <Box marginTop={'2rem'}>
        <Text  marginBottom={'1rem'} fontWeight={'extrabold'} fontSize={["17px", "20px", "25px"]}>{name.toUpperCase()}</Text>
        <Text marginBottom={'1rem'} fontWeight={'medium'} paddingTop={'0.5rem'} paddingBottom={'0.5rem'} paddingLeft={'0.5rem'} fontSize={["13px", "15px", "17px"]} color={textColor} bgColor={techStackBackground}>{techStack}</Text>
        <Box fontSize={["13px", "15px", "17px"]} marginBottom={'1rem'}>
          {description.map((eachDesc) => {
                    return <li>{eachDesc}</li>
                })}
        </Box>
        <CustomLink text='View on Github' url={githubLink} marginTop='1rem' />
      </Box>
    </Box>
  )
}

export default ProjectCard