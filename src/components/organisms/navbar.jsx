import { Box, Button, List, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorMode, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Hamburger from '../SVG/hamburger'
import { useRouter } from 'next/router'

import Link from 'next/link'
import ColorModeSwitcher from './colorModeSwitcher'



const ActiveLink = (href) => {
    const router = useRouter()


    if (router.asPath === href) return {
        fontWeight: 'bold',
        color: '#d81159'
    }
    else return {
    }


}

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const onClickHandler = () => {
        onOpen();
    }




    return (
        <Box className='Navbar' width='100%' display='flex' justifyContent='space-between' alignItems='center' paddingLeft='7rem' paddingRight='7rem' paddingTop='1rem' paddingBottom='1rem'>
            <Box display={'flex'} gap={'0.4rem'} justifyContent={'center'} alignItems={'center'}><Link href="/"><Text fontSize={["15px", "20px", "23x"]} fontWeight='bold'>Raunak Gayen</Text></Link>
                <ColorModeSwitcher />
            </Box>
            <Box display={{ sm: 'none', md: 'none', lg: 'flex' }}>
                <List fontSize={["12px", "15px", "17px"]} display='flex' gap='2rem' fontWeight='medium'>
                    <ListItem transition={'200ms ease-in-out'} _hover={{ color: '#d81159', cursor: 'pointer' }}><Link href="/about" style={ActiveLink('/about')} >About Me</Link></ListItem>
                    <ListItem transition={'200ms ease-in-out'} _hover={{ color: '#d81159', cursor: 'pointer' }}><Link href="/experiences" style={ActiveLink('/experiences')}>Experiences</Link></ListItem>
                    <ListItem transition={'200ms ease-in-out'} _hover={{ color: '#d81159', cursor: 'pointer' }} style={ActiveLink('/projects')}><Link href='/projects'>Projects</Link></ListItem>
                    <ListItem transition={'200ms ease-in-out'} _hover={{ color: '#d81159', cursor: 'pointer' }}><Link href='/guestbook' style={ActiveLink('/uses')}>Guestbook</Link></ListItem>
                </List>
            </Box>
            <Box display={{ sm: 'flex', md: 'flex', lg: 'none' }}>
                <Hamburger classname='socialsLogo' onClickHandler={onClickHandler} />
            </Box>

            <Modal onClose={onClose} isCentered size='full' isOpen={isOpen}>
                <ModalOverlay
                    backdropFilter='blur(20px)'
                />
                <ModalContent bg='none'>
                    <ModalCloseButton color='white' />
                    <ModalBody display='flex' justifyContent='center' alignItems='center' textColor='white'>
                        <List fontSize={["12px", "15px", "17px"]} display='flex' gap='2rem' flexDirection='column' justifyContent='center' alignItems='center' fontWeight='bold'>
                            <ListItem transition={'200ms ease-in-out'} _hover={{ fontWeight: 'bold', cursor: 'pointer', transform: 'scale(1.05)' }}><Link href="/about">About Me</Link></ListItem>
                            <ListItem transition={'200ms ease-in-out'} _hover={{ fontWeight: 'bold', cursor: 'pointer', transform: 'scale(1.05)' }}>Experiences</ListItem>
                            <ListItem transition={'200ms ease-in-out'} _hover={{ fontWeight: 'bold', cursor: 'pointer', transform: 'scale(1.05)' }}>Projects</ListItem>
                            <ListItem transition={'200ms ease-in-out'} _hover={{ fontWeight: 'bold', cursor: 'pointer', transform: 'scale(1.05)' }}>Uses</ListItem>
                        </List>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default Navbar