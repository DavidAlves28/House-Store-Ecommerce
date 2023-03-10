import { GlobalContext } from "../GlobalContext/GlobalContext";
import { useState } from "react";

import { useDisclosure, } from "@chakra-ui/react";







export default function GlobalState(props) {

    const [carrinho, setCarrinho] = useState([])
    const [carrinhoMenu, setCarrinhoMenu] = useState([])
    const [search, setSearch] = useState('')  
    const [pokeAdd, setPokeAdd] = useState('')
    const [tipo, setTipo] = useState('')
    

    const { isOpen, onOpen, onClose } = useDisclosure()

    // array para mostrar tipos no select do input no menu Header!
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


    const onChangeTipo = (e) => {
        setTipo(e.target.value)
    }
    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }
    


  //  lista do carrinho para não mostrar item duplicado
 
    function buyPokemon(produto) {
        //filtra os produtos duplicados e aumenta quantidade      
        const newCarrinho = [...carrinhoMenu]

        const item = newCarrinho.find((item) => item.id === produto.id);
        // objeto para ser inserido no novo array
        const newPokemon = {
            id: produto.id,
            name: produto.name.english,
            price: Number(produto.price),
            quantidade: 1
        }
        if (!item) {
            newCarrinho.push(newPokemon);
          } else {
            item.quantidade= item.quantidade + 1;
          }            
       
        // set estados para ser usados
        setCarrinhoMenu(newCarrinho)
        setCarrinho(newCarrinho)

        // estado para imprimir no modal o nome no pokemonn adicionado ao carrinho
        setPokeAdd(produto.name.english)
        
        // Open Modal
        // se o item não estiver no carrinho então o modal será visível
        // se o item estiver no carrinho ,ele não mostrará o modal
        item ? onClose() : onOpen()
        // tempo para que o modal seja fechado!
        setTimeout(() => {
            onClose()
        }, 1000)
    }


    // função para remover item do carrinho e diminuir sua quantidade!
    function deleteItem(produto) {
        //cópia do array.
       const newCarrinho = [...carrinhoMenu]
       // função para verificar se o item já está no carrinho;
       const item = newCarrinho.find((item) => item.id === produto.id);
      //condicional para remover quantidade e excluir item do carrinho.
       if(item && item.quantidade > 1  ){
        item.quantidade = item.quantidade - 1
        setCarrinhoMenu(newCarrinho)
       } else {
        const filterCarrinho = newCarrinho.filter((item)=> item.id !== produto.id)
        setCarrinhoMenu(filterCarrinho)
       }       
    }
    
    const totalProdutos = carrinhoMenu.reduce((produto, nproduto) => {
        return produto + nproduto.quantidade * nproduto.price
    }, 0)

   
   
    const context = {
        carrinho,
        carrinhoMenu,
        pokemontypesArray,
        tipo,
        onChangeTipo,
        buyPokemon,
        onChangeSearch,
        search,
        isOpen,
        onOpen,
        onClose,
        pokeAdd,
        totalProdutos,
        deleteItem,       
    }
    return (
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}