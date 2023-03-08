import { useContext } from "react"
import { GlobalContext } from "../../GlobalContext/GlobalContext"
import { Box, Flex, } from "@chakra-ui/react";
import CardProduto from "../../Components/CardProduto";
import SimpleSidebar from "../../Components/SideBarFilters";
import pokemons from "../../utils/pokemons.json";
import { ModalConfirm } from "../../Components/ModalConfirm";
import MenuSimple from "../../Components/Menu";



export default function HomePage() {
    const context = useContext(GlobalContext);
    const { tipo, filterCarrinho, search,isOpen  } = context;
   

    return (
        <Flex flexDir={'column'} >
            <MenuSimple/>            


            <Flex my={'2%'} flexWrap='wrap' justifyContent={'center'} alignItems={'center'} >
                {filterCarrinho().filter((pokemon) => {
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
                    {  isOpen && <ModalConfirm/>}   
            </Flex>
        </Flex>

    )
}