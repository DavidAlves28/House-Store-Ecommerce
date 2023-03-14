
import { Box, Flex, Grid, GridItem, } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import MenuSimple from "../Menu/index";

export default function Checkout() {
    const context = useContext(GlobalContext);
    const { carrinhoMenu } = context;




    return (
        <>
            <MenuSimple />
            <Flex w={'full'} justifyContent='center' alignItems={'center'} >
                {carrinhoMenu && carrinhoMenu.map((item) => {
                    return (

                        <Grid
                            templateColumns='auto'
                            m='10px'
                            mt='3%'
                            templateRows='repeate(5,1fr)'
                            key={item.id}>
                            <GridItem>
                            <Box>
                                {item.id}
                                
                            </Box>
                                {item.name}
                                {item.quantidade}
                                {item.price}
                            </GridItem>

                        

                        </Grid>

                    )
                })}
            </Flex>

        </>
    )
}