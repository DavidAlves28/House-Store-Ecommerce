import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";

import { Text } from "@chakra-ui/react";

export default function CarrinhoPage () {
    const context = useContext(GlobalContext)
    const {carrinho} = context;
    return (
        <>
            <Text>CarrinhoPage</Text> 
        </>
    )
}