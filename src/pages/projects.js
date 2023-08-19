import CustomHeading from '@/components/organisms/customHeading'
import ProjectCard from '@/components/organisms/projectCard';
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Footer from './footer';
import Navbar from '@/components/organisms/navbar';
import { motion } from 'framer-motion'
import KeyboardShortcutsMenu from '@/components/organisms/keyboardShortcutsMenu';
import { useState, useEffect } from 'react';
import { projectArr } from '@/data';



const Projects = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // to remove hydration error
  if(!isMounted) {
    return null;
  }


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
        <CustomHeading title={'Projects'} marginBottom={'3rem'} />

        {projectArr.map((project) => (
          <Box key={project.name}>
            <ProjectCard name={project.name} techStack={project.techStack} imageURL={project.imageURL} githubLink={project.githubLink} description={project.description} />
          </Box>
        ))}

        <Footer />

      </Box>
    </>
  )
}

export default Projects