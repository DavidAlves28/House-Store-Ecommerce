import { Button, Flex, Heading, Image, Input, Link, Text, } from "@chakra-ui/react";

import { getColors } from "../../utils/returnColors";
import { getTypes } from "../../utils/returnTypes";
import { goToCarrinho } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import { AddIcon } from "@chakra-ui/icons";
import logo from '../../assets/imgs/background.png'

export default function CardProduto(props) {

    const { pokemon } = props
    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const { buyPokemon } = context



    return (
        <Flex
            _hover={{
                transform: 'scale(0.95)',
                transition: '0.5s'
            }}
            justifyContent={'center'}
            alignItems={'center'}
            h={'max-content'} w={'300px'}
            m='2px'
            p={'2px'}
            boxShadow={'base'}
            rounded={'8px'}
            bg={getColors(pokemon.type[0])}
            cursor='pointer'>
            <Image pos={'absolute'} zIndex='0' src={logo} />

            <Flex
                flexDir={'column'}>
                <Heading
                    position={'relative'}
                    right="45px"
                    textTransform={'capitalize'}
                    color='#fff'> {pokemon.name.english}
                </Heading>
                <Text
                    position={'relative'}
                    left="180px"
                    top='-30px'
                    textTransform={'capitalize'}
                    as={'b'} color='#fff'
                    fontSize={'xl'} > #{pokemon.id}
                </Text>
                <Link
                    position={'relative'} left="-30px" top='-15px'
                    onClick={() => goToCarrinho(navigate)}
                    as={'b'}
                    textDecor='underline'
                    color='#FFF'
                    colorScheme={'linkedin'}
                    fontSize={'20px'}>
                    Detalhes

                </Link>
                <Flex >
                    {pokemon.type.map((type) => {
                        return <Image w={'80px'} key={type} src={getTypes(type)} />
                    })}
                </Flex>
                <Image
                    w={'150px'}
                    zIndex={1}
                    src={pokemon.image} />
                <Button
                    justifySelf={'center'}
                    m='0 auto'
                    mb='2px'
                    leftIcon={<AddIcon />}
                    colorScheme={'green'}
                    onClick={() => buyPokemon(pokemon)} > Comprar  {pokemon.price}</Button>
                    

                    
            </Flex>
        </Flex >
    )
}