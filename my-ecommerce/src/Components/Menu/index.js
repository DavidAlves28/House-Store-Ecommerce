import { Box, Button,Center,Flex, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { goToCarrinho } from "../../routes/coordinator";


export default function MenuNav() {
    const navigate = useNavigate()
    return (
        <>

            <Flex justifyContent={'space-around'} w={'100vw'} bg={'blackAlpha.700'}>
            
             
                <Center >
                    <Input placeholder="Pesquisar" /> <Button>Pesquisar</Button>
                </Center>
                <Box></Box>
                <Button onClick={() => goToCarrinho(navigate)}>Carrinho</Button>
            </Flex>



        </>
    )
}