import { useContext } from "react"
import { GlobalContext } from "../../GlobalContext/GlobalContext"
import { Box, Center, Flex, Heading, } from "@chakra-ui/react";
import CardProduto from "../../Components/CardProduto";
import { ModalConfirm } from "../../Components/ModalConfirm";
import MenuSimple from "../../Components/Menu";
import CarouselOfertas from "../../Components/Carousel";
import pokemons from "../../utils/pokemons.json"


export default function HomePage() {
    const context = useContext(GlobalContext);
    const { tipo, search,isOpen   } = context;
   

    return (
        <Flex   flexDir={'column'} >
            <MenuSimple/>            
            <CarouselOfertas/>
            <Center > <Heading textShadow='2px 5px 5px rgba(0 ,0, 0, 0.5)' >Todos os pokemons</Heading></Center>

            <Flex  my={'2%'} flexWrap='wrap' justifyContent={'center'} alignItems={'center'} >
                {pokemons.filter((pokemon) => {
                    return pokemon.name.english.toLowerCase().includes(search.toLowerCase()) || pokemon.id.toLowerCase().includes(search.toLowerCase())
                })
                    .filter((pokemon) => {
                        return !tipo ? pokemon : pokemon.type.includes(tipo) // retorna o tipo selecionado!
                    })
                    .map((pokemon) => {
                        return (
                            <Box m={'2% 1.5%'} rounded={'8px'} shadow={'0 5px 15px rgba(0 ,0, 0, 0.2)'} key={pokemon.id}>
                                <CardProduto
                                    pokemon={pokemon} />
                            </Box>
                        )
                    })}
                    {/* {  isOpen && <ModalConfirm/>}    */}
                    
            </Flex>
        </Flex>

    )
}