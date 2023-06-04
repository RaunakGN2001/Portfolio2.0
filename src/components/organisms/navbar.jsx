import { Box, Button, List, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorMode, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Hamburger from '../SVG/hamburger'
import { useRouter } from 'next/router'

import Link from 'next/link'
import ColorModeSwitcher from './colorModeSwitcher'
import HamburgerDark from '../SVG/hamburger-dark'
import { color } from 'framer-motion'



const ActiveLink = (href) => {
    const router = useRouter()

    console.log(router.asPath, href);


    if (router.asPath === href) return {
        fontWeight: 'bold',
        color: '#d81159'
    }
    else return {
    }


}

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { colorMode, toggleColorMode } = useColorMode();

    const onClickHandler = () => {
        onOpen();
    }




    return (
        <Box position={'fixed'} zIndex={'1'} className='Navbar' width='100%' display='flex' justifyContent='space-around' alignItems='center' paddingLeft={{base:'2rem', lg:'7rem'}} paddingRight={{base:'2rem', lg:'7rem'}} paddingTop='1rem' paddingBottom='1rem' backdropFilter='blur(10px)' >
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Link href="/"><Text fontSize={["15px", "20px", "23x"]} fontWeight='bold'>Raunak Gayen</Text></Link>
                <ColorModeSwitcher />
            </Box>
            <Box display={{ base:'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}>
                <List fontSize={["12px", "15px", "17px"]} display='flex' gap='2rem' fontWeight='medium'>
                    <ListItem transition={'200ms ease-in-out'} _hover={{ color: '#d81159', cursor: 'pointer' }}><Link href="/about" style={ActiveLink('/about')} >About Me</Link></ListItem>
                    <ListItem transition={'200ms ease-in-out'} _hover={{ color: '#d81159', cursor: 'pointer' }}><Link href="/experiences" style={ActiveLink('/experiences')}>Experiences</Link></ListItem>
                    <ListItem transition={'200ms ease-in-out'} _hover={{ color: '#d81159', cursor: 'pointer' }} style={ActiveLink('/projects')}><Link href='/projects'>Projects</Link></ListItem>
                    <ListItem transition={'200ms ease-in-out'} _hover={{ color: '#d81159', cursor: 'pointer' }}><Link href='/guestbook' style={ActiveLink('/guestbook')}>Guestbook</Link></ListItem>
                </List>
            </Box>
            <Box display={{ base: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}>
                {colorMode === "light" ? <Hamburger classname='socialsLogo' onClickHandler={onClickHandler} /> : <HamburgerDark classname='socialsLogo' onClickHandler={onClickHandler} /> }
            </Box>

            <Modal onClose={onClose} isCentered size='full' isOpen={isOpen}>
                <ModalOverlay
                    backdropFilter='blur(20px)'
                />
                <ModalContent bg='none'>
                    <ModalCloseButton color='white' _hover={{ color:'#eb2d72' }}/>
                    <ModalBody display='flex' justifyContent='center' alignItems='center' textColor='white'>
                        <List fontSize={["12px", "15px", "17px"]} display='flex' gap='2rem' flexDirection='column' justifyContent='center' alignItems='center' fontWeight='bold'>
                            <ListItem transition={'200ms ease-in-out'} _hover={{ fontWeight: 'bold', cursor: 'pointer', color:'#eb2d72', transform: 'scale(1.05)' }}><Link href="/about">About Me</Link></ListItem>
                            <ListItem transition={'200ms ease-in-out'} _hover={{ fontWeight: 'bold', cursor: 'pointer', color:'#eb2d72', transform: 'scale(1.05)' }}><Link href="/experiences">Experiences</Link></ListItem>
                            <ListItem transition={'200ms ease-in-out'} _hover={{ fontWeight: 'bold', cursor: 'pointer', color:'#eb2d72', transform: 'scale(1.05)' }}><Link href="/projects">Projects</Link></ListItem>
                            <ListItem transition={'200ms ease-in-out'} _hover={{ fontWeight: 'bold', cursor: 'pointer', color:'#eb2d72', transform: 'scale(1.05)' }}><Link href="/guestbook">Guestbook</Link></ListItem>
                        </List>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default Navbar