
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
    Text,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import logoPokemon from '../../assets/imgs/PokemonHeader.png'
import { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import { goToCarrinho } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { SlWallet } from 'react-icons/sl'
import shoppingFull from '../../assets/imgs/shopping-cart.png'
import ThemeMode from '../ThemeMode';
import { GiHamburgerMenu } from 'react-icons/gi'
export default function MenuSimple() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const context = useContext(GlobalContext)
    const {
        pokemontypesArray,
        onChangeTipo,
        tipo,
        onChangeSearch,
        carrinhoMenu,
        search,
        totalQuantidade,
        itensUnicos } = context
    const navigate = useNavigate()

    
    return (
        <>
            <Box zIndex={2} bg={useColorModeValue('white', 'gray.900')} px={4} shadow='0 5px 15px rgba(0 ,0, 0, 0.2)' >
                <Flex
                    h={['20vh', '12vw']}
                    w={'full'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <IconButton
                        mr={'1px'}
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <Center><GiHamburgerMenu /> </Center>}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <ThemeMode />
                    <Flex w={"100%"} gap='10px' h={'90%'} alignItems={'end'} justifyContent={'center'} >
                        <Image my={'5px'} w={['180px', 'min-content']} src={logoPokemon} />
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}
                            justifyContent={'end'}
                            alignItems='end'
                        >
                            <Input variant='filled' border={'1px solid grey'} onChange={(e) => onChangeSearch(e)} value={search} w={'100%'} placeholder='Pesquisa por  nome ou id' />
                            <Select
                                id='tipo'
                                w={'100%'}
                                variant='filled'
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
                        <Menu >
                            <MenuButton
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                w='max-content'
                                fontSize={['3xl', '4xl']}
                            >
                                {carrinhoMenu.length !== 0 ?
                                    <Flex><Image w={'40px'} src={shoppingFull} /> <Text shadow='2px 5px 5px rgba(0 ,0, 0, 0.5)' pos={'relative'} right='6px' rounded={'50%'} w='20px' color={'#fff'} bg={'blue.400'} as='b' h='min-content' fontSize={'sm'} >{carrinhoMenu.length}</Text></Flex> :
                                    <Image w={'40px'} src={shoppingFull} />}

                            </MenuButton>
                            <MenuList  >
                                <MenuItem bg={'blackAlpha.300'} as="b" onClick={() => goToCarrinho(navigate)} >Seu Carrinho</MenuItem>
                                {itensUnicos && itensUnicos.map((item) => {
                                    return (
                                        <MenuItem bg={'whatsapp.2w00'} key={item.id}>
                                            <Text as="b">
                                                {item.quantidade}x   {item.nome} R${item.preco}
                                            </Text>


                                        </MenuItem>

                                    )
                                })}

                                <MenuDivider border={'1px'} />
                                <MenuItem bg={'blackAlpha.300'} as="b" > Total R${totalQuantidade.toFixed(2)}</MenuItem>
                                <MenuDivider border={'1px'} />
                                <Button leftIcon={<SlWallet />} cursor={'pointer'} w={'full'} bg={'green.200'} as="b" onClick={() => goToCarrinho(navigate)} > Finalizar Compra</Button>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box w={'full'} pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            <Input variant='filled' border={'1px solid grey'} onChange={(e) => onChangeSearch(e)} value={search} w={'100%'} placeholder='Pesquisa por  nome ou id' />
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
                                variant='filled'
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

        </>
    );
}