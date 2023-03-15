import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext/GlobalContext";



export default function NewCard(props) {
    const { produto } = props
    const context = useContext(GlobalContext)
    const { addToCart, toast, details } = context
     const priceOld = produto.discountPercentage/100 * produto.price + produto.price

    return (
        <Flex
            p={2}
            alignItems="center"
            justifyContent="center"
        >
            <Box
                bg="white"
                _dark={{
                    bg: "gray.700",
                }}
                py={4}
                px={2}
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                w="380px"
                h="600px"
                alignItems="center"
                justifyContent="center"
            >
                <Image
                    h={'65%'}
                    w="full"
                    overflow={'hidden'}
                    my={2}
                    src={!produto ? <Spinner /> : produto.images[2] || produto.images[1] || produto.images[0]}
                    alt={produto.title}
                />

                <Box w='100' h='100%' p="6">
                    <Badge rounded="full" px="2" colorScheme="teal">
                        New
                    </Badge>

                    <Flex justifyContent='space-between'  >
                        <Text
                            mt="1"
                            fontWeight="bold"
                            as="h4"
                            lineHeight="tight"
                            noOfLines={1}
                            h='full'>
                            {produto.title}
                        </Text>
                        <Button textDecor={'underline'} onClick={() => details(produto.id)}> Detalhes</Button>


                    </Flex>
                    <Box
                        display="flex"
                        gap={2}
                        alignItems="center"
                        justifyContent={'flex-start'} >
                        <Text as='b'  >

                        De {priceOld.toFixed(2)}    
                        </Text>
                        <Box
                            color="gray.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="md"
                            textTransform="uppercase"
                            textDecor={'line-through'}
                        >
                        %    {produto.discountPercentage}
                        </Box>
                         &bull;
                    </Box>
                    <Text as='b'  >
                     Por   R$ {produto.price.toFixed(2)}
                    </Text>


                    <Flex justifyContent={'space-between'} mt="2" alignItems="center">
                        {Array(5)
                            .fill("")
                            .map((_, i) => (
                                <StarIcon
                                    key={i}
                                    color={i < produto.rating ? "teal.500" : "gray.300"}
                                />
                            ))}

                        <Box as="span" ml="2" color="gray.350" fontSize="sm">
                            {produto.rating}

                        </Box>
                        <Button
                            px={2}
                            py={1}
                            fontSize="xs"
                            colorScheme={'whatsapp'}
                            rounded="lg"
                            textTransform="uppercase"
                            _hover={{
                                bg: "whatsapp.700",
                                color: "#fff"
                            }}
                            _focus={{
                                bg: "gray.400",
                            }}
                            onClick={() => {
                                addToCart(produto)
                                toast({
                                    title: `${produto.title}`,
                                    description: "Item adicionado ao carrinho!",
                                    status: 'success',
                                    position: 'top',
                                    duration: 3000,
                                    isClosable: true,
                                })
                            }}
                        >
                            Add ao carrinho
                        </Button>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    );
};
