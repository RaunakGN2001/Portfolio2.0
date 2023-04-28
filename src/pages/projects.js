import CustomHeading from '@/components/organisms/customHeading'
import ProjectCard from '@/components/organisms/projectCard';
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Footer from './footer';
import Navbar from '@/components/organisms/navbar';
import { motion } from 'framer-motion'

var projectObject = require('../data/project.json');

// console.log(projectObject);

const nameArr = projectObject["name"];
const techStackArr = projectObject["techStack"];
const imageURLArr = projectObject["imageURL"];
const githubLinkArr = projectObject["githubLink"];
const descriptionArr = projectObject["description"];


const Projects = () => {
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
        <CustomHeading title={'Projects'} marginBottom={'3rem'} />
        
        {/* when adding new project add that at the end of every attribute in json file and here update at the top */}

       
        <ProjectCard name={nameArr[1]} techStack={techStackArr[1]} imageURL={imageURLArr[1]} githubLink={githubLinkArr[1]} description={descriptionArr[1]} />

        <ProjectCard name={nameArr[0]} techStack={techStackArr[0]} imageURL={imageURLArr[0]} githubLink={githubLinkArr[0]} description={descriptionArr[0]} />

        <ProjectCard name={nameArr[2]} techStack={techStackArr[2]} imageURL={imageURLArr[2]} githubLink={githubLinkArr[2]} description={descriptionArr[2]} />



      <Footer />
       
    </Box>
    </>
  )
}

export default Projects