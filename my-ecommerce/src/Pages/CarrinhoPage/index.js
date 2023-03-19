import React  from 'react'

import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import { Box, Button, Divider, Flex, Heading, Image, Stack,  Text,  } from "@chakra-ui/react";

import { useNavigate } from 'react-router-dom';

import { SlWallet } from 'react-icons/sl';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { BASE_URL } from '../../constants/Base_url';
import { useRequestData } from '../../hooks/useRequestData';
import { FaCcMastercard, FaCcVisa } from 'react-icons/fa';

import { goToHome } from '../../routes/coordinator';


export default function CarrinhoPage() {
    const context = useContext(GlobalContext)
    const { carrinhoMenu, totalProdutos, addToCart, removeItemToCart } = context;

    // alguns ids para retornar os dados de cadastro da api !
    const userid = ['1', '2', '27', '50', '12', '21', '38']
    // ira retornar um id aleatório para colocar no userRequestData
    const returnRandomIds = userid[Math.floor(Math.random() * userid.length)]
    //   hook usado para utilizar dados do usuário da API 
    const [data] = useRequestData(`${BASE_URL}/users/${returnRandomIds}`, {})
    const navigate = useNavigate()



    return (
        <Box
            w='100vw'
        >
            {/* <SideBarDetailsPage/> */}
            <Flex
                h='100%'
                gap={3}
                flexDir={['column', 'row']}
                minW={['99vw', '100%']}
                justifyContent={'center'}
                alignItems='start'
                m='0 auto'
                p={5}   >


                <Box

                    overflow={'scroll'}
                    minW={['full', '30vw']}
                    h={['100vw', '80vh']}

                >

                    {carrinhoMenu && carrinhoMenu.map((item) => {
                        const subTotal = item.quantidade * item.price
                        return (


                            <Flex
                                justifyContent={'center'}
                                alignItems={['flex-start', 'center']}
                                px={5}
                                bg='blackAlpha.100'
                                w={['100vw', '40vw', '30vw']}
                                h={['100%', '80%', '20vh']}
                                flexDir={['column', 'column', 'row']}
                                shadow='base'
                                key={item.id} >
                                <Stack mt={2} w={['30vw', '', '12vw']} rounded={'20px'} shadow='base'  >

                                    <Image rounded={'20px'} w='100%' src={item.image} alt={item.name} />
                                </Stack>

                                <Box
                                    as={Flex}
                                    p={10}
                                    w={['100%', '30vw']}

                                    flexDir={['column']}
                                    justifyContent='flex-start'
                                >
                                    <Text fontSize={'lg'} >  {item.name}</Text>
                                    <Divider />
                                    <Text size='sm'  > Valor unitário  : R$ {item.price.toFixed(2)}</Text>
                                    <Divider />
                                    <Flex
                                        justifyContent={'space-evenly'}
                                        alignItems='center'
                                        rounded='10px'
                                        h={['3.5vh', '30px']}
                                        w={['30vw', '20vw', '30%']}
                                    >
                                        <Button
                                            fontSize='sm'
                                            rounded={'10px'}
                                            w='2px'
                                            h='22px'
                                            colorScheme={'whatsapp'}
                                            onClick={() => addToCart(item)}
                                        > <AddIcon />
                                        </Button>
                                        <Text m={2} as="b">
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

                                    <Divider />
                                    <Text w='100%' size='sm' as='b' > SubTotal : R$ {subTotal.toFixed(2)}</Text>

                                </Box>


                            </Flex>
                        )
                    })}
                </Box>
                <Box mb={['10vh', '']} w={['99vw', '50vw']} h={['100%', '80vh']} >
                    <Flex
                        justifyContent={'flex-start'}
                        alignItems={['flex-start', 'center']}
                        p={2}
                        bg='blackAlpha.400'
                        w={['100vw', 'full']}
                        minH={['30vh', '80vh']}
                        flexDir={['column', 'row']}
                        shadow='base'
                    >
                        <Flex flexDir={'column'} >
                            <Stack as={Flex} justify='space-around' flexDir={["column", "row"]} >
                                <Image w='180px' src={data.image} alt={data.firstName} />
                                <Box
                                    rounded={'lg'}
                                    bg='grey'
                                    m='0 auto'
                                    w={['300px', '300px']}
                                    h='180px'
                                    p={2}  >
                                    <Flex
                                        justifyContent={'space-between'}
                                        right='0px' p={2}
                                        direction='row'
                                        fontWeight={'bold'}
                                        color='blackAlpha.700'  ><Text > Platinum </Text>
                                        <Box gap={1} as={Flex}>
                                            <FaCcMastercard size='2.3vw' />
                                            <FaCcVisa size='2.3vw' />
                                        </Box>
                                    </Flex>
                                    <Text p={2} textShadow="1px 1px 1px " letterSpacing={1.5} fontSize='lg' color='blackAlpha.700'  > {data.bank?.cardNumber} </Text>
                                    <Text p={2} textShadow="1px 1px 1px " color='blackAlpha.700'  > Moeda {data.bank?.currency} </Text>
                                    <Text p={2} textShadow="1px 1px 1px " color='blackAlpha.700'  > Validade {data.bank?.cardExpire} </Text>
                                </Box>
                            </Stack>
                            <Flex
                                flexWrap={'wrap'}
                                justifyContent='flex-start'
                                alignItems={'center'}
                                bg='' w='100%' >

                                <Box pl='30px'   >
                                    <Text color='facebook.300' mb={'-10px'} fontWeight='bold' > Primeiro Nome</Text>
                                    <Text p={2} textDecoration={'underline'} fontStyle='italic'  >  {data.firstName} </Text>
                                </Box>
                                <Divider />
                                <Box pl='30px'  >
                                    <Text color='facebook.300' mb={'-10px'} fontWeight='bold' > Sobre Nome</Text>
                                    <Text p={2} textDecoration={'underline'} fontStyle='italic'  >{data.maidenName}  {data.lastName} </Text>
                                </Box>
                                <Divider />
                                <Box pl='30px'  >
                                    <Text color='facebook.300' mb={'-10px'} fontWeight='bold' > Data de  Nascimento</Text>
                                    <Text p={2} textDecoration={'underline'} fontStyle='italic'  >  {data.birthDate} </Text>
                                </Box>
                                <Divider />
                                <Box pl='30px'  >
                                    <Text color='facebook.300' mb={'-10px'} fontWeight='bold' > Idade </Text>
                                    <Text p={2} textDecoration={'underline'} fontStyle='italic'  >  {data.age} </Text>
                                </Box>
                                <Divider />
                                <Box pl='30px'  >
                                    <Text color='facebook.300' mb={'-10px'} fontWeight='bold' > Genero</Text>
                                    <Text p={2} textDecoration={'underline'} fontStyle='italic'  >  {data.gender} </Text>
                                </Box>
                                <Divider />
                                <Box pl='30px'  >
                                    <Text color='facebook.300' mb={'-10px'} fontWeight='bold' > Email</Text>
                                    <Text p={2} textDecoration={'underline'} fontStyle='italic'  >  {data.email} </Text>
                                </Box>
                                <Divider />
                                <Box pl='30px'  >
                                    <Text color='facebook.300' mb={'-10px'} fontWeight='bold' > Telefone</Text>
                                    <Text p={2} textDecoration={'underline'} fontStyle='italic'  >  {data.phone} </Text>
                                </Box>
                                <Divider />

                            </Flex>
                            <Box as={Flex}
                                position='sticky'
                                bottom={'10px'}
                                h='10vh'
                                w={['88vw', '80%']}
                                m='0 auto'
                                rounded={'lg'}
                                justifyContent={'space-evenly'}
                                alignItems='center'
                                bg='gainsboro'
                                my={'30px'}
                                shadow={'base'} >

                                <Heading color={'black'} textShadow='0px 2px 4px'>
                                    Total: R$ {totalProdutos.toFixed(2)}
                                </Heading>
                                {carrinhoMenu.length > 0 &&
                                    <Button
                                        leftIcon={<SlWallet />}
                                        cursor={'pointer'}
                                        w={['70%', '40%']}
                                        h={['100%', '80%']}
                                        as="b"
                                        p={3}
                                        colorScheme={'facebook'}
                                        _hover={{
                                            transform: 'translateY(-3px)',
                                            shadow: 'dark-lg',
                                        }}
                                    // onClick={() => comprar(navigate)}
                                    >
                                        Finalizar Compra
                                    </Button>}
                            </Box>
                        </Flex>

                    </Flex>
                    <Button
                        pos={['absolute','static']}
                        top={'0px'}
                        colorScheme={'facebook'}
                        onClick={() => goToHome(navigate)}
                        m={2} w={['50vw','30vw']} h='8vh' p={3} >
                        Produtos </Button>
                </Box>
            </Flex>


        </Box>
    )
}