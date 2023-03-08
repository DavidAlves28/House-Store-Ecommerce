import { Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { PricesPokemon } from "../../utils/PricesCard";
import { getColors } from "../../utils/returnColors";
import { getTypes } from "../../utils/returnTypes";
import { goToCarrinho } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";


export default function CardProduto(props) {
     
    const { pokemon } = props   
    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const {buyPokemon,carrinho} = context
   
    return (
        <Flex
            justifyContent={'center'}
            alignItems={'center'}
            h={'280px'} w={'300px'}
            m='12px'
            shadow={'0 5px 15px rgba(0 ,0, 0, 0.2)'}
            rounded={'8px'}
            bg={getColors(pokemon.type[0])}
            >


            <Flex flexDir={'column'} >
                <Heading textTransform={'capitalize'} textAlign={'left'} color='#fff'> {pokemon.name.english}</Heading>
                <Text textTransform={'capitalize'} textAlign={'left'} color='#fff'> {pokemon.id}</Text>
                <Link
                    onClick={() => goToCarrinho(navigate)}
                    as={'b'}
                    textDecor='underline'
                    color='#FFF'
                    colorScheme={'linkedin'}
                >Detalhes

                </Link>
                <Flex >
                    {pokemon.type.map((type) => {
                            return <Image w={'80px'} key={type} src={getTypes(type)} />
                        })}
                </Flex>
                <Image w={'150px'} src={`https://www.serebii.net/swordshield/pokemon/${pokemon.id}.png`} />

                <Button justifySelf={'flex-end'} colorScheme={'green'} onClick={() =>buyPokemon(pokemon)} > Comprar  {PricesPokemon(pokemon.type[0])}</Button>


            </Flex>
        </Flex>
    )
}