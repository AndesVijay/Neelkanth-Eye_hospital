import React from 'react'
import {
  Flex,
  Container,
  Image,
  Stack,
  Text,
  Icon,
  Button,
  Menu,
  MenuItem,
  MenuGroup,
  MenuList,
  MenuButton,
  useColorMode,
  useColorModeValue,
  Tooltip
} from '@chakra-ui/react'

import { FaChevronDown, FaUserCircle } from 'react-icons/fa'
import './Nav.scss'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import NEH from '../../../images/NEH.png'
export default function DoctorNav ({ name }) {
  // colors
  const bgColor = useColorModeValue('white', 'gray.800')

  const colorMode = window.localStorage.getItem('chakra-ui-color-mode')
  const navigate = useNavigate()

  const { toggleColorMode } = useColorMode()
  const ColorModeToggleButton = props => {
    if (colorMode === 'dark') {
      return (
        <Tooltip label='Light Mode'>
          <SunIcon cursor='pointer' {...props} onClick={toggleColorMode} />
        </Tooltip>
      )
    } else {
      return (
        <Tooltip label='Dark Mode'>
          <MoonIcon cursor='pointer' {...props} onClick={toggleColorMode} />
        </Tooltip>
      )
    }
  }

  const signOut = () => {
    localStorage.removeItem('oneHealth')
    window.location.replace('/Home')
  }

  return (
    <Flex
      position={{ md: 'fixed' }}
      bg={bgColor}
      minH='4rem'
      w='100%'
      marginTop={{ md: '-4rem' }}
      zIndex='99'
    >
      <Container maxW='container.lg' paddingTop='5px'>
        <Stack direction={['column', 'row']} alignItems='center'>
          <Flex
            cursor='pointer'
            align='center'
            mr={2}
            onClick={() => navigate('/')}
          >
            {/* <Image my='1' mr='3' boxSize='46px' src={NEH}/> */}
            <img src={NEH} width="46" height="46"></img>
            <Text fontSize='xl' fontWeight='500'>
              Neelkanth Eye Hospital
            </Text>
          </Flex>
          
          <Stack direction={['column', 'row']}>
            <Button
              onClick={() => navigate('/dashboard/add-patient')}
              colorScheme='navItem'
              variant='ghost'
            >
              Add patient
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                colorScheme='navItem'
                variant='ghost'
                rightIcon={<Icon as={FaChevronDown} color='navItem.500' />}
              >
                Users
              </MenuButton>
            </Menu>
          </Stack>
          

          <Stack
            align='center'
            direction={['column', 'row']}
            ml={{ sm: 'auto !important' }}
          >
            <ColorModeToggleButton mx='2' />
            <Menu>
              <MenuButton
                as={Button}
                colorScheme='navItem'
                variant='ghost'
                rightIcon={
                  <Icon as={FaUserCircle} size='lg' color='navItem.500' />
                }
              >
                {name || 'Account'}
              </MenuButton>
              <MenuList>
                <MenuGroup title='Profile'>
                  {/* <MenuItem>My Account</MenuItem> */}
                  <MenuItem onClick={signOut}>Sign Out </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  )
}
