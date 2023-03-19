import {
    Box,
    Drawer,
    DrawerContent,
    Flex, IconButton,
    Input, InputGroup,
    InputLeftElement,
    Text,
    useDisclosure,
    DrawerOverlay,
    Select,
    Image,
    FormLabel,
    Checkbox,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import { FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi"
import ColorMode from "../ColorTheme";
import iconStore from "../../assets/imgs/store.png"
import MenuSimple from "../MenuCarrinho";
import { goToCarrinho } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";


export default function SideBarMenu() {
    // Context
    const context = useContext(GlobalContext)
    const { produtos, 
        onChangeSearch,
        categorias,
        onChangeCategoria,
        brand,
        onChangeBrands,
        onChangeValue,        

    } = context

  
    const navigate = useNavigate()
    const sidebar = useDisclosure();

    //   para não mostrar item duplicado no filter de  categoria
    const setTeste = new Set()
    const filterCategory = produtos.filter((produto) => {
        const duplicatedPerson = setTeste.has(produto.category);
        setTeste.add(produto.category);
        return !duplicatedPerson;
    })


    const NavItem = (props) => {
        const { icon, children, ...rest } = props;

        return (
            <Flex
                align="center"
                px="4"
                mx="2"
                rounded="md"
                py="3"
                cursor="pointer"
                color="grey.700"
                _hover={{
                    bg: "blackAlpha.100",
                    color: "grey.300",
                }}
                role="group"
                fontWeight="semibold"
                transition=".15s ease"
                {...rest}
            >

                {children}
            </Flex>
        );
    };


    const SidebarContent = (props) => (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            zIndex="sticky"
            h='100vh'
            pb="10"
            overflowX="hidden"
            overflowY="auto"
            bg="whitesmoke"
            borderColor="blackAlpha.500"
            borderRightWidth="1px"
            w="50"
            _dark={{
                bg: "blackAlpha.900",
                color: "grey.900",
            }}
            {...props}>

            <Flex px="4" py="5" align="center" >
                <Image src={iconStore} />
                <Text
                    fontSize="2xl"
                    ml="2"
                    color="black"
                    _dark={{
                        color: "whitesmoke",
                    }}
                    fontWeight="bold">
                    House Store
                </Text>
            </Flex>
            <Box
                direction="column"
                align='center'
                as="nav"
                fontSize="sm"
                color="gray.700"
                _dark={{
                    color: "whitesmoke",
                }}
                aria-label="Main Navigation">
                <NavItem>
                    <FormLabel  >
                        Marcas
                        <Select
                            placeholder="Ver marcas"
                            textTransform={'capitalize'}
                            onChange={onChangeBrands}
                            value={brand} >
                            {produtos.map((item, index) => {
                                return (
                                    <option value={item.brand} key={index} > {item.brand}  </option>
                                )
                            })}
                        </Select>
                    </FormLabel>
                </NavItem>
                <NavItem>
                    <FormLabel>
                        Categorias
                        <Select
                            placeholder="Ver categorias"
                            textTransform={'capitalize'}
                            onChange={onChangeCategoria}
                            value={categorias} >
                            {filterCategory.map((item, index) => {
                                return (
                                    <option value={item.category} key={index}>{item.category} </option>)
                            })}
                        </Select>
                    </FormLabel>
                </NavItem>



                <Flex flexDir={'column-reverse'} >
                    <NavItem>
                        <Checkbox onChange={onChangeValue} value={30} > Até R$ 30</Checkbox>
                    </NavItem>
                    <NavItem>
                        <Checkbox onChange={onChangeValue} value={100}> até R$ 100 </Checkbox>
                    </NavItem>
                    <NavItem>
                        <Checkbox onChange={onChangeValue} value={200}> até R$ 200 </Checkbox>
                    </NavItem>
                    <NavItem>
                        <Checkbox onChange={onChangeValue} value={300}> até R$ 300 </Checkbox>
                    </NavItem>
                    <NavItem>
                        <Checkbox onChange={onChangeValue} value={500}> até R$ 500 </Checkbox>
                    </NavItem>
                    <NavItem>
                        <Checkbox onChange={onChangeValue} value={1000}> até R$ 1000 </Checkbox>
                    </NavItem>
                    <NavItem>
                        <Checkbox onChange={onChangeValue} value={Infinity}> Ver todos </Checkbox>
                    </NavItem>
                </Flex>
                <NavItem p={6} onClick={() => goToCarrinho(navigate)} >Carrinho <FiShoppingCart size={'25px'} /> </NavItem>
                <ColorMode />
            </Box>
        </Box>
    );

    return (
        <>
            <Box
                as="section"
                bg="whiteAlpha.900"    
                position={'sticky'}
                top={'0px'}   
                zIndex={2}         
            >
                <SidebarContent
                    display={{
                        base: "none",
                        md: "unset",
                    }}
                />
                <Drawer
                    isOpen={sidebar.isOpen}
                    onClose={sidebar.onClose}
                    placement="left"
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <SidebarContent w="full" borderRight="none" />
                    </DrawerContent>
                </Drawer>
                <Box
                    ml={{
                        base: 0,
                        md: 0,
                    }}
                    transition=".3s ease"
                >
                    <Flex
                        as="header"
                        align="center"
                        justifyContent={'space-evenly'}
                        w="100%"
                        px="4"
                        bg="whitesmoke"
                        _dark={{
                            bg: "blackAlpha.900",
                        }}
                        borderBottomWidth="1px"
                        borderColor="blackAlpha.300"
                        h="8vh"

                    >
                        <IconButton
                            aria-label="Menu"
                            display={{
                                base: "inline-flex",
                                md: "none",
                            }}
                            onClick={sidebar.onOpen}
                            icon={<FiMenu />}
                            size="md"
                            flexDir={['column', "", '']}
                        />


                        <InputGroup
                            w="100"
                            m='0 auto'
                            display={['flex']}
                        >
                            <InputLeftElement
                                h={'4vh'}

                                color="blackAlpha.700"
                                _dark={{
                                    color: "whitesmoke"
                                }}
                            >
                                <FiSearch />
                            </InputLeftElement>
                            <Input
                                w={['100%', '30vw']}
                                h={ '4vh'}
                                onChange={onChangeSearch}
                                _dark={{
                                    bg: "blackAlpha.800",
                                    color: "white"
                                }} placeholder="Pesquisar Produto " />
                        </InputGroup>

                        <MenuSimple />

                    </Flex>



                </Box>
            </Box>



        </>
    );
};