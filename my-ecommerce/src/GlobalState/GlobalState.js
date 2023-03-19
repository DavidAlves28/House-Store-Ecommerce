import { GlobalContext } from "../GlobalContext/GlobalContext";
import { useEffect, useState } from "react";
import { useDisclosure, useToast, } from "@chakra-ui/react";
import axios from 'axios'
import { BASE_URL } from "../constants/Base_url";

export default function GlobalState(props) {
    
    //Estado para menu do carrinho
    const [carrinhoMenu, setCarrinhoMenu] = useState([])
    //Estado para pesquisa 
    const [search, setSearch] = useState('')
    // Estado para enviar informações (id) para modal detalhes utilizar no hook useRequestData()
    const [productAdd, setProductAdd] = useState('')
    // Estado para armazenar dados da APi
    const [produtos, setProdutos] = useState([])

    //Estado para filter
    const [categorias, setCategorias] = useState("")
    const [brand, setBrand] = useState("")

    const [valueMax, setValueMax] = useState(Infinity)

    // funções do Modal!
    const { isOpen, onOpen, onClose, } = useDisclosure()
    // toast usado para enviar mensagem 'item adicionado ao carrinho' na tela.
    const toast = useToast()

    // onChange para categoria,Search, Brands(marcas) e valor.
    const onChangeCategoria = (e) => {
        setCategorias(e.target.value)
    }
    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }
    const onChangeBrands = (e) => {
        setBrand(e.target.value)
    }
    const onChangeValue = (e) => {
        setValueMax(e.target.value)
    }
    const [isLoading, setIsLoading] = useState(true)

    //API para renderizar produtos maximo 30! total 100!
    const getAllProducts = async () => {

        try {
            const res = await axios.get(`${BASE_URL}/products?skip=0&limit=80`)
            setProdutos(res.data.products)
            setIsLoading(true)

        } catch (error) {
            console.log('Erro ao buscar produto!');
            setIsLoading(false)

        }
    }
    function addToCart(produto) {
        //filtra os produtos duplicados e aumenta quantidade      
        const newCarrinho = [...carrinhoMenu]
        const item = newCarrinho.find((item) => item.id === produto.id);
        // objeto para ser inserido no novo array
        const newProduct = {
            id: produto.id,
            name: produto.title,
            image: produto.thumbnail,
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
    // retorna valor total do carrinho 
    const totalProdutos = carrinhoMenu.reduce((produto, nproduto) => {
        return produto + nproduto.quantidade * nproduto.price
    }, 0)


    function details(id) {
        onOpen()
        setProductAdd(id)
    }


    useEffect(() => {
        getAllProducts()
    }, []);


    const context = {
       
        carrinhoMenu,
        categorias,
        onChangeCategoria,
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
        toast,
        brand,
        onChangeBrands,
        getAllProducts,
        onChangeValue,
        valueMax,

    }
    return (
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}