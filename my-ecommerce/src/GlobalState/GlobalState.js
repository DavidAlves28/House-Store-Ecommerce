import { GlobalContext } from "../GlobalContext/GlobalContext";
import {useEffect, useState } from "react";
import pokemons from "../utils/pokemons.json"



export default function GlobalState (props){ 

    const [carrinho, setCarrinho] = useState([])
    const [exibirProdutos,setExibirProdutos] = useState(true)
    const [exibirCheckout, setCheckout] = useState(true)  
    const [total,setTotal]= useState('0,00')
    const [search,setSearch] = useState('')
    const [preco,setPreco] = useState('')
    const [tipo,setTipo] = useState('')




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
        // onOpen() // Open Modal
        alert('pokemon comprado!')
    }
 

    const context = { 
        carrinho,
        pokemontypesArray,
        tipo,
        onChangeTipo,
        buyPokemon,
        filterCarrinho
    }
    return ( 
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}