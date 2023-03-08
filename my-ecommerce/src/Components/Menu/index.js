
import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    Center,
    Image,
    Input,
    Select,
    Menu,
    MenuButton,
    Button,
    MenuList,
    MenuItem,
    MenuDivider,
    Link,
    Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import logoPokemon from '../../assets/imgs/PokemonHeader.png'
import { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import { TiShoppingCart } from 'react-icons/ti'
import { goToCarrinho } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';


export default function MenuSimple() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const context = useContext(GlobalContext)
    const { pokemontypesArray, onChangeTipo, tipo, onChangeSearch, carrinho ,search ,totalProdutos } = context
    const navigate = useNavigate()

    
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex
                    h={['20vh','18vw']}
                    w={'full'}
                    alignItems={'center'}
                    justifyContent={'center'} >
                    <IconButton
                        mr={'20px'}
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <Flex flexDir={'column'} spacing={8} alignItems={'center'}>

                        <Image my={'5px'} w={['180px', 'min-content']} src={logoPokemon} />

                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}
                            justifyContent={'end'}
                        >
                            <Input border={'1px solid grey'} onChange={(e) => onChangeSearch(e)} value={search} w={'100%'} placeholder='Pesquisa por  nome ou id' />
                            {/* <RadioGroup onChange={(e) => onChangePrice(e)} value={price}  >
                                <Stack direction='row'>
                                    <Radio value='100'>A R$100</Radio>
                                    <Radio value='200'>Second</Radio>
                                    <Radio value='300'>Third</Radio>
                                </Stack>
                            </RadioGroup> */}
                            <Select
                                id='tipo'
                                w={'100%'}
                                name='tipo'
                                border={'1px solid grey'}
                                onChange={(e) => onChangeTipo(e)}
                                value={tipo}
                                placeholder='Tipos dos pokemons'>
                                {pokemontypesArray.map((type) => {
                                    return (
                                        <option key={type} value={type} >{type}</option>
                                    )
                                })}
                            </Select>

                        </HStack>
                    </Flex>
                    <Flex w='15vw' h={'85%'} alignItems={'end'} justifyContent='end'>
                        <Menu  >
                            <Box  fontSize={['3xl', '4xl']} >
                            <TiShoppingCart />

                            </Box>
                            <MenuButton
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                w='100px'                                
                                fontSize={'2xl'} 
                                textDecor={'underline'}                          
                            >Carrinho
                            </MenuButton>
                            <MenuList  >
                                <MenuItem bg={'blackAlpha.300'}  as="b" onClick={()=>goToCarrinho(navigate)} >Seu Carrinho</MenuItem>
                                {carrinho && carrinho.map((item)=>{
                                    return (                                        
                                            <MenuItem bg={'whatsapp.2w00'}  key={item.id}>
                                            <Text as="b">
                                              {item.name.english} R${item.price} 
                                            </Text>
                                            
                                            
                                            </MenuItem>
                                        
                                    )
                                })}
                                                               
                                <MenuDivider border={'1px'}/>
                                <MenuItem bg={'blackAlpha.300'}  as="b" > Total R${Number(totalProdutos)}</MenuItem>
                                <MenuDivider border={'1px'}/>
                                <Button cursor={'pointer'}  w={'full'} bg={'green.200'} as="b" onClick={()=>goToCarrinho(navigate)} > Finalizar Compra</Button>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box w={'full'} pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            <Input border={'1px solid grey'} onChange={(e) => onChangeSearch(e)} value={search} w={'100%'} placeholder='Pesquisa por  nome ou id' />
                            {/* <RadioGroup onChange={(e) => onChangePrice(e)} value={price}  >
                                <Stack direction='row'>
                                    <Radio value='100'>A R$100</Radio>
                                    <Radio value='200'>Second</Radio>
                                    <Radio value='300'>Third</Radio>
                                </Stack>
                            </RadioGroup> */}
                            <Select
                                id='tipo'
                                w={'100%'}
                                name='tipo'
                                onChange={(e) => onChangeTipo(e)}
                                value={tipo}
                                border={'1px solid grey'}
                                placeholder='Selecione o tipo'>
                                {pokemontypesArray.map((type) => {
                                    return (
                                        <option key={type} value={type} >{type}</option>
                                    )
                                })}
                            </Select>
                        </Stack>
                    </Box>
                ) : null}
            </Box>

            <Center  as={'b'} fontSize="3xl">Todos os pokemons</Center>
        </>
    );
}