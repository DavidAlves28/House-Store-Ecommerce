import React, { useContext } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Input,
  Button,
  Image,
  Center,
  Checkbox,
  Select,

} from '@chakra-ui/react';
import { 
  FiMenu,
} from 'react-icons/fi';
import PokemonLogo from '../../assets/imgs/PokemonHeader.png'
import { goToCarrinho } from '../../routes/coordinator';
import { useNavigate, useParams } from "react-router-dom";
import { FaSearch } from 'react-icons/fa'
import SliderPrice from '../SliderPrice';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import { getTypes } from '../../utils/returnTypes';






export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="80%">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}


const SidebarContent = ({ onClose, ...rest }) => {
  const context = useContext(GlobalContext);
  const {pokemontypesArray,tipo,onChangeTipo} = context; 
  

  
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      h="full"
      {...rest}>

      <Image p='5px' src={PokemonLogo} />
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Filtros
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Center>
        <Input m={'0 auto'} w='70%' placeholder='Pesquisar' /><Button m={'0 auto'} colorScheme={'linkedin'} > <FaSearch /></Button>
      </Center>
      <Center my='10px' >
      <SliderPrice  />

      </Center>

      <Center  m='10px'>
      <Select 
      id='tipo'
      name='tipo'
      onChange={(e)=>onChangeTipo(e)}
      value={tipo}      
       placeholder='Tipos dos pokemons'>
      {pokemontypesArray.map((type)=>{
        return (
          <option key={type} value={type} >{type}</option>
        )
      })}
      </Select>
      </Center>


    </Box>
  );
};


const NavItem = ({ icon, children, ...rest }) => {


  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>

        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};


const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="22vh"
      w={'99vw'}
      alignItems="center"
      bg={useColorModeValue('white', 'gray.200')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Flex flexDir={'column'}>
        <Image mb={'3px'} src={PokemonLogo} />
        <Flex>
          <Input placeholder='Pesquisar' colorScheme={'blackAlpha'} />
          <Button  > Pesquisar</Button>
        </Flex>
      </Flex>



    </Flex>
  );
};