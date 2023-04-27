import { Box, Text, Kbd } from '@chakra-ui/react'
import React from 'react'

const ProjectCard = ( { name, techStack, imageURL, githubLink, description } ) => {
  return (
    <Box display={'flex'} flexDirection={'column'} width='100%' marginBottom={'3rem'} paddingBottom={'3rem'} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} padding={'1.5rem'}> 
      <Box>
          <img src={imageURL} />
      </Box>
      <Box marginTop={'2rem'}>
        <Text  marginBottom={'1rem'} fontWeight={'extrabold'} fontSize={["17px", "20px", "25px"]}>{name.toUpperCase()}</Text>
        <Text marginBottom={'1rem'} fontWeight={'medium'} paddingTop={'0.5rem'} paddingBottom={'0.5rem'} paddingLeft={'0.5rem'} fontSize={["13px", "15px", "17px"]} bgGradient='linear(to-r, blackAlpha.300, white)'>{techStack}</Text>
        <Box fontSize={["13px", "15px", "17px"]}>
          {description.map((eachDesc) => {
                    return <li>{eachDesc}</li>
                })}
        </Box>
        <Text fontWeight={'bold'} textDecoration={'underline'} marginTop={'1rem'} fontSize={["13px", "15px", "17px"]} _hover={{ color: '#d81159', cursor:'pointer' }}><a href={githubLink} target='_blank'>View on Github ↗</a></Text>
      </Box>
    </Box>
  )
}

export default ProjectCard