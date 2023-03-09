import { GlobalContext } from "../GlobalContext/GlobalContext";
import { useState } from "react";

import { useDisclosure, } from "@chakra-ui/react";







export default function GlobalState(props) {

    const [carrinho, setCarrinho] = useState([])
    const [carrinhoMenu, setCarrinhoMenu] = useState([])
    const [total, setTotal] = useState('0,00')
    const [search, setSearch] = useState('')
    const [price, setPrice] = useState('0')
    const [pokeAdd, setPokeAdd] = useState('')
    const [tipo, setTipo] = useState('')

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
    const onChangeTipo = (e) => {
        setTipo(e.target.value)
    }
    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }
    const onChangePrice = (e) => {
        setPrice(e.target.value)
    }

   

    
    function buyPokemon(produto,) {
        //filtra os produtos duplicados e aumenta quantidade
        carrinhoMenu.forEach((prod, index) => {
            if (prod.id === produto.id) {
                carrinhoMenu[index].quantidade++ }
        })
        // objeto para ser inserido no novo array
        const newPokemon ={ 
            id:produto.id,
            nome: produto.name.english,
            preco: produto.price,
            quantidade: 1
        }     
        //array com itens comprados!         
        const newCarrinho = [...carrinhoMenu, newPokemon]
        // set estados para ser usados
        setCarrinhoMenu(newCarrinho)
        setCarrinho(newCarrinho)
        
        // estado para imprimir no modal o nome no pokemonn adicionado ao carrinho
        setPokeAdd(produto.name.english)
        onOpen() // Open Modal
        
        setTimeout(() => {
            onClose()
        }, 2500)
    }
    
    
    
    
    //  lista do carrinho para não mostrar item duplicado
    const listaCarrinhoitemUnico = new Set();
    const itensUnicos = carrinhoMenu.filter((produto) => {
        const itemDuplicados = listaCarrinhoitemUnico.has(produto.id);
        listaCarrinhoitemUnico.add(produto.id);
        return !itemDuplicados;
    });

    // total de cada produto caso tenha mais quantidade
    const totalQuantidade = itensUnicos.reduce((produto, nproduto) => {
        return  produto + nproduto.quantidade * nproduto.preco
      }, 0)
    // total produtos adicionados ao carrinho
    const totalProdutos = carrinhoMenu.reduce((produto, nproduto) => {
        return Number(produto) + Number(nproduto.preco)
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
        onChangePrice,
        price,
        pokeAdd,
        totalProdutos,
        totalQuantidade,
        itensUnicos

    }
    return (
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}