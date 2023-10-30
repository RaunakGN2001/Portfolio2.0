import { Box, Button, Card, CardBody, CardFooter, Stack, Text, Link } from '@chakra-ui/react'
import React from 'react'
import Footer from './footer';
import CustomHeading from '@/components/organisms/customHeading';
import Navbar from '@/components/organisms/navbar';
import { AnimatePresence, inView, motion, useInView } from 'framer-motion'
import KeyboardShortcutsMenu from '@/components/organisms/keyboardShortcutsMenu';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { certificateArr } from '@/data';


const Certificates = () => {

    const [isMounted, setIsMounted] = useState(false);

    const certificateArrSorted = certificateArr.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        return dateB - dateA;
    });



    useEffect(() => {
        setIsMounted(true);
    }, []);

    // to remove hydration error
    if (!isMounted) {
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
                    stiffness: 10,
                    damping: 10,
                }}
                fontWeight='medium' className='About-container' minHeight='90vh' paddingInline={{ base: '1.5rem', sm: '5rem', md: '10rem', lg: '15rem' }} paddingTop='7rem' display='flex' flexDirection='column' alignItems={{ md: 'center', sm: 'center', lg: '' }}>
                <CustomHeading title={'Certificates'} marginBottom={'1rem'} />
                <Text fontWeight='medium' marginBottom='3rem'>Each certificate earned is a stepping stone on the path to knowledge. Dive into my world of continuous growth, where contests, courses, and certifications paint the vibrant canvas of my skills and passions.</Text>
                <Box width='100%' display='flex' flexDir='column' gap='1rem'>
                    {certificateArrSorted.map(item => (
                        <Card key={item.name}
                            as={motion.div}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'ease-in-out', }}
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 50 }
                            }}
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            display='flex'
                            justifyContent='flex-start'
                            alignItems='center'
                            // backgroundColor='#262c3d'
                            // border='1px solid white'
                            boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px'
                            margin='0'
                            paddingTop='3'
                            paddingBottom='3'
                            paddingRight='2'
                            gap='1rem'>
                            <Box height='100%' marginLeft='1rem' marginRight='0.5rem'>
                                <Image
                                    width={50}
                                    height={50}
                                    src={item.imageURL}
                                    alt=''
                                />
                            </Box>
                            <CardBody padding='0'>
                                <Box>
                                    <Text fontSize={["13px", "15px", "18px"]} fontWeight='bold'>
                                        <Link fontWeight={'bold'} target='_blank' _hover={{ color: '#eb2d72', textDecoration: 'underline' }} href={item.link}>
                                            {item.name}
                                        </Link>
                                    </Text>

                                    <Box>
                                        <Text fontSize={["10px", "12px", "13px"]} color='GrayText'>{item.issuedBy} • {item.date}</Text>
                                    </Box>
                                </Box>
                            </CardBody>
                        </Card>
                    ))}
                </Box>
                <Footer />
            </Box>
        </>
    )
}

export default Certificates