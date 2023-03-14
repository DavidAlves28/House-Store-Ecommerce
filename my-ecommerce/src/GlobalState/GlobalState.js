import { GlobalContext } from "../GlobalContext/GlobalContext";
import { useEffect, useRef, useState } from "react";

import { useDisclosure, useToast, } from "@chakra-ui/react";
import axios from 'axios'
import { BASE_URL } from "../constants/Base_url";
export default function GlobalState(props) {

    const [carrinho, setCarrinho] = useState([])
    const [carrinhoMenu, setCarrinhoMenu] = useState([])
    const [search, setSearch] = useState('')
    const [productAdd, setProductAdd] = useState('')
    const [tipo, setTipo] = useState('')
    const [infoDetails, setInfoDetails] = useState([])
    const [produtos, setProdutos] = useState([])

    const { isOpen, onOpen, onClose, } = useDisclosure()
    const toast = useToast()


    const onChangeTipo = (e) => {
        setTipo(e.target.value)
    }
    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }
    const getAllProducts = () =>{
       
        axios.get(`${BASE_URL}/products`)
        .then((res)=>setProdutos(res.data.products))
        .catch((err)=>console.log(err))
    }



    //  lista do carrinho para não mostrar item duplicado

    function addToCart(produto) {
        //filtra os produtos duplicados e aumenta quantidade      
        const newCarrinho = [...carrinhoMenu]
        const item = newCarrinho.find((item) => item.id === produto.id);
        // objeto para ser inserido no novo array
        const newProduct = {
            id: produto.id,
            name: produto.title,
            price: Number(produto.price),
            quantidade: 1
        }
        if (!item) {
            newCarrinho.push(newProduct);
        } else {
            item.quantidade = item.quantidade + 1;
        }
        // set estados para ser usados
        setCarrinhoMenu(newCarrinho)
        setCarrinho(newCarrinho)
  
      
        setTimeout(() => {
            onClose()
        }, 1000)
    }

    // função para remover item do carrinho e diminuir sua quantidade!
    function removeItemToCart(produto) {
        //cópia do array.
        const newCarrinho = [...carrinhoMenu]
        // função para verificar se o item já está no carrinho;
        const item = newCarrinho.find((item) => item.id === produto.id);
        //condicional para remover quantidade e excluir item do carrinho.
        if (item && item.quantidade > 1) {
            item.quantidade = item.quantidade - 1
            setCarrinhoMenu(newCarrinho)
        } else {
            const filterCarrinho = newCarrinho.filter((item) => item.id !== produto.id)
            setCarrinhoMenu(filterCarrinho)
        }
    }

    const totalProdutos = carrinhoMenu.reduce((produto, nproduto) => {
        return produto + nproduto.quantidade * nproduto.price
    }, 0)

    function details (id){
        onOpen()
        setProductAdd(id)
    }
   
    

    useEffect(() => {
       getAllProducts()
       
    }, []);


    const context = {
        carrinho,
        carrinhoMenu,
        tipo,
        onChangeTipo,
        addToCart,
        onChangeSearch,
        search,
        isOpen,
        onOpen,
        onClose,
        productAdd,
        totalProdutos,
        removeItemToCart,     
        details,
        produtos,
        toast
    }
    return (
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}