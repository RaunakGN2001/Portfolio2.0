import React, { useEffect, useState } from 'react';
import { useDisclosure, Button, Box, SlideF, Text, List, ListItem, Code } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommand } from '@fortawesome/free-solid-svg-icons';
import KeyboardShortcutIcon from '../SVG/keyboardShortcutIcon';

const MotionBox = motion(Box);

const KeyboardShortcutsMenu = () => {
    const { onOpen, isOpen, onToggle, onClose } = useDisclosure();


    // If I hit Command on Keyboard the Keyboard Menu Pops up
    const [isCommandPressed, setIsCommandPressed] = useState(false);

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === 'Meta') {
                setIsCommandPressed(prevState => !prevState);
                console.log('Meta pressed');
            }
        }

        function handleKeyUp(event) {
            if (event.key === 'Meta') {
                setIsCommandPressed(prevState => !prevState);
                console.log('Meta released');
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);


    


    const variants = {
        open: { opacity: 1, rotateX: 0 },
        closed: { opacity: 0, rotateX: -90 },
    };


    return (
        <>
            <Button
                position="fixed"
                bottom="0"
                right="4"
                width={'80px'}
                height={'80px'}
                onClick={() => {
                    onToggle();
                    setIsCommandPressed(prevState => !prevState);
                }}
                backgroundColor={'transparent'}
                borderRadius={'50%'}
                zIndex="sticky"

            >
                <KeyboardShortcutIcon />
            </Button>

            <AnimatePresence>
                {isCommandPressed && (
                    <MotionBox
                        as="div"
                        position="fixed"
                        bottom="20"
                        right="4"
                        background='whiteAlpha.600'
                        p="4"
                        zIndex="1"
                        borderRadius="md"
                        boxShadow="md"
                        initial={{ opacity: 0, translateY: 20 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        exit={{ opacity: 0, translateY: 20 }}
                        transition={{ duration: 0.3 }}
                        transformOrigin="bottom"
                    >
                        <Text fontSize={'30px'} textAlign={'center'}>⌨️</Text>
                        <List>
                            <ListItem><Code>Ctrl</Code> + <Code>H</Code>  👉🏻  Homepage</ListItem>
                            <ListItem><Code>Ctrl</Code> + <Code>A</Code>  👉🏻  About</ListItem>
                            <ListItem><Code>Ctrl</Code> + <Code>E</Code>  👉🏻  Experiences</ListItem>
                            <ListItem><Code>Ctrl</Code> + <Code>P</Code>  👉🏻  Project</ListItem>
                            <ListItem><Code>Ctrl</Code> + <Code>G</Code>  👉🏻  Guestbook</ListItem>
                        </List>
                    </MotionBox>
                )}
            </AnimatePresence>
            
        </>
    );
}

export default KeyboardShortcutsMenu