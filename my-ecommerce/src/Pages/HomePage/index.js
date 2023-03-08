import { useContext } from "react"
import { GlobalContext } from "../../GlobalContext/GlobalContext"
import { Box, Flex, } from "@chakra-ui/react";
import CardProduto from "../../Components/CardProduto";
import SimpleSidebar from "../../Components/SideBarFilters";
import pokemons from "../../utils/pokemons.json";



export default function HomePage() {
    const context = useContext(GlobalContext);
    const { tipo ,filterCarrinho} = context;
   

    return (
        <Flex>
            <SimpleSidebar />

            <Flex my={'2%'} flexWrap='wrap' justifyContent={'center'} alignItems={'center'} >
                {filterCarrinho().filter((pokemon)=>{
                    return !tipo ? pokemon : pokemon.type.includes(tipo)
                })
                .map((pokemon) => {
                    return (
                        <Box  m={'2% 1.5%'} rounded={'8px'} shadow={'0 5px 15px rgba(0 ,0, 0, 0.2)'} key={pokemon.id}>
                            <CardProduto                             
                            pokemon={pokemon} />
                        </Box>
                    )
                })}

            </Flex>
        </Flex>

    )
}