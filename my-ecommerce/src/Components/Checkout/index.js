
import { Avatar, Box, Button, Center, Checkbox, Divider, Flex,  FormHelperText,  FormLabel,  Grid, GridItem, Heading, Input, InputGroup, InputLeftAddon, Radio, RadioGroup, Select, SimpleGrid, Stack, TagLabel, Text, Textarea, } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import MenuSimple from "../MenuCarrinho/index";

export default function Checkout() {
    const context = useContext(GlobalContext);
    const { carrinhoMenu } = context;

    return (
        <>
            <MenuSimple />
            <Flex bg='bisque' h="90vh" justifyContent={'center'} alignItems='center'>
                <Box  bg='green.400' rounded={'2xl'} w='90%' h={'90%'} >
                    <Center height='full' w='120vw' >
                        <Divider orientation="vertical" />
                        <Flex flexDir={['row','column']} >
                        <Box>S</Box>
                        <Box>S</Box>
                        <Box>S</Box>
                        <Box>S</Box>
                        <Box></Box>
                        dsadl</Flex>
                    </Center>
                </Box>
               
            </Flex>

        </>
    )
}