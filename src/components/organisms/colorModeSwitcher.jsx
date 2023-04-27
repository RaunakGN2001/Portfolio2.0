import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ColorModeSwitcher = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const text = useColorModeValue("dark", "light");
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
    size={'md'} variant={'ghost'} color={'current'} onClick={toggleColorMode} icon={<SwitchIcon />} aria-label={`Switch to ${text} mode`} />
  )
}

export default ColorModeSwitcher