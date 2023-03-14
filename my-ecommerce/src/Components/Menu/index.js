
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
import { AddIcon, CloseIcon, MinusIcon } from '@chakra-ui/icons';
import { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import { goToCarrinho, goToCheckout } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { SlWallet } from 'react-icons/sl'
import shoppingFull from '../../assets/imgs/shopping-cart.png'
import { GiHamburgerMenu } from 'react-icons/gi'



export default function MenuSimple() {

    // Componente responsável por retornar carrinho atualizado.
    // botão para alterar tema da página escuro ou claro.
    // Comtém inputs de pesquisa e tipo.


    const { isOpen, onOpen, onClose } = useDisclosure();
    const context = useContext(GlobalContext)
    const {
        onChangeTipo,
        tipo,
        onChangeSearch,
        carrinhoMenu,
        search,
        addToCart,
        removeItemToCart,
        totalProdutos,
    } = context

    const navigate = useNavigate()

    return (

        <Box>
            <Flex
                alignItems={'center'}
                justifyContent={'space-between'}>
                <Flex
                    w={"100%"}
                    gap='10px'
                    alignItems={'end'}
                    justifyContent={'center'} >
                    <Menu >
                        <MenuButton
                            rounded={'full'}
                            variant={'link'}
                            cursor={'pointer'}
                            w='max-content'
                            fontSize={['3xl', '4xl']}
                        >
                            {carrinhoMenu.length !== 0 ?
                                <Flex>
                                    <Image
                                        w={'40px'}
                                        src={shoppingFull} />
                                    <Text
                                        shadow='2px 5px 5px rgba(0 ,0, 0, 0.5)'
                                        pos={'relative'}
                                        right='6px'
                                        rounded={'50%'}
                                        w='20px'
                                        color={'#fff'}
                                        bg={'blue.400'}
                                        as='b'
                                        h='min-content'
                                        fontSize={'sm'}>
                                        {carrinhoMenu.length}
                                    </Text>
                                </Flex> :
                                <Image w={'40px'} src={shoppingFull} />}
                        </MenuButton>
                        <MenuList  >
                            <MenuItem
                                bg={'blackAlpha.300'}
                                as="b"
                                onClick={() => goToCarrinho(navigate)}>
                                Seu Carrinho</MenuItem>

                            {carrinhoMenu && carrinhoMenu.map((item) => {
                                return (
                                    <Flex
                                        p='1%'
                                        bg={'whatsapp.2w00'}
                                        h="full" w={['70vw', '15vw']}
                                        justifyContent={'space-between'}
                                        alignItems='center' key={item.id}>
                                        <Flex
                                            justifyContent={'space-between'}
                                            alignItems='center'
                                            rounded='10px'
                                            bg={'bisque'}
                                            h={['3.5vh', '30px']}
                                            w={['26vw', '50%', '35%']}
                                        >
                                            <Button
                                                fontSize='sm'
                                                rounded={'10px'}
                                                w='2px'
                                                h='22px'
                                                colorScheme={'whatsapp'}
                                                onClick={() =>addToCart(item)}
                                            > <AddIcon />
                                            </Button>
                                            <Text color={'black'} as="b">
                                                {item.quantidade}x
                                            </Text>
                                            <Button
                                                fontSize='sm'
                                                rounded={'10px'}
                                                w='1vw'
                                                h='22px'
                                                colorScheme={'red'}
                                                onClick={() => removeItemToCart(item)}
                                            > <MinusIcon />
                                            </Button>
                                        </Flex>

                                        <Text textDecor={'underline'} color='blue.500' as="b">
                                            {item.name}
                                        </Text>
                                        <Text as="b">
                                            R${item.price}
                                        </Text>
                                    </Flex>
                                )
                            })}
                            <MenuDivider border={'1px'} />
                            <MenuItem
                                bg={'blackAlpha.300'}
                                as="b" > Total R$ {totalProdutos.toFixed(2)}
                            </MenuItem>
                            <MenuDivider border={'1px'} />
                            {carrinhoMenu.length > 0 &&
                                <Button
                                    leftIcon={<SlWallet />}
                                    cursor={'pointer'}
                                    w={'full'}
                                    bg={'green.300'}
                                    as="b"
                                    onClick={() => goToCheckout(navigate)}>
                                    Finalizar Compra
                                </Button>}
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Box>


    );
}