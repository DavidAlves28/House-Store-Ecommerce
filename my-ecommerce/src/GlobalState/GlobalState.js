import { GlobalContext } from "../GlobalContext/GlobalContext";
import {useEffect, useState } from "react";
import pokemons from "../utils/pokemons.json"
import { useDisclosure,} from "@chakra-ui/react";





export default function GlobalState (props){ 
   
    const [carrinho, setCarrinho] = useState([])    
    const [total,setTotal]= useState('0,00')
    const [search,setSearch] = useState('')
    const [price,setPrice] = useState('0')
    const [pokeAdd,setPokeAdd] = useState('')
    const [tipo,setTipo] = useState('')

    const { isOpen, onOpen, onClose } = useDisclosure()

    const pokemontypesArray = [
        "Normal",
        "Fire",
        "Water",
        "Grass",
        "Flying",
        "Fighting",
        "Poison",
        "Electric",
        "Ground",
        "Rock",
        "Psychic",
        "Ice",
        "Bug",
        "Ghost",
        "Steel",
        "Fairy"
      ];
    const onChangeTipo = (e)=>{
        setTipo(e.target.value)
    }
    const onChangeSearch = (e)=>{
        setSearch(e.target.value)       
    }
    const onChangePrice = (e)=>{
        setPrice(e.target.value)       
    }

   
    
    const filterCarrinho = () =>
        pokemons.filter(
            (pokemonInList) => !carrinho.find(
                (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
            )
        )
    function buyPokemon (newPokemon) {
        
        const verificarPokemon = carrinho.find((pokemon) =>
            pokemon.id === newPokemon.id
        )
        if (!verificarPokemon) {
            const newPokedex = [...carrinho, newPokemon]
            setCarrinho(newPokedex)
        }
        setPokeAdd(newPokemon.name.english)
        onOpen() // Open Modal
        setTimeout(()=>{
            onClose()
        },2500)
    }
    const totalProdutos = carrinho.reduce((produto, nproduto) => {
       return Number(produto) +  Number(nproduto.price) 
      },0)
    
    const context = { 
        carrinho,
        pokemontypesArray,
        tipo,
        onChangeTipo,
        buyPokemon,
        filterCarrinho,
        onChangeSearch,
        search,
        isOpen,
        onOpen,
        onClose,   
        onChangePrice,
        price,
        pokeAdd,
        totalProdutos 
        
    }
    return ( 
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}