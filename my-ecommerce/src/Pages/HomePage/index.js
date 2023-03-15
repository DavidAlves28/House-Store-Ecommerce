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
    Image
} from "@chakra-ui/react";
import { useContext } from "react";
import CaptionCarousel from "../../Components/Carousel";
import { ModalDetails } from "../../Components/ModalDetails/index";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import { FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi"
import NewCard from "../../Components/CardProduto/index";
import ColorMode from "../../Components/ColorTheme";
import iconStore from "../../assets/imgs/store.png"
import MenuSimple from "../../Components/MenuCarrinho";
import { categoryFilter } from "../../utils/category";



export default function HomePage() {
    const sidebar = useDisclosure();
    const context = useContext(GlobalContext)
    const { produtos, isOpen, search, onChangeSearch, categorias, onChangeCategoria, brand, onChangeBrands } = context
    const NavItem = (props) => {
        const { icon, children, ...rest } = props;

        console.log(categorias);
        console.log(brand);
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
            h="full"
            pb="10"
            overflowX="hidden"
            overflowY="auto"
            bg="whitesmoke"
            borderColor="blackAlpha.500"
            borderRightWidth="1px"
            w="60"
            _dark={{
                bg: "blackAlpha.700",
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
            <Flex
                direction="column"
                as="nav"
                fontSize="sm"
                color="gray.700"
                _dark={{
                    color: "whitesmoke",
                }}
                aria-label="Main Navigation"
            >


                <NavItem>

                    <Select textTransform={'capitalize'} onChange={onChangeBrands}   >
                        <option value={''}>Marcas</option>

                        {produtos.map((item, index) => {
                            return (
                                <option key={index} > {item.brand}  </option>
                            )
                        })}
                    </Select>

                </NavItem>
                <NavItem icon={"HiCollection"}>

                    <Select textTransform={'capitalize'} onChange={onChangeCategoria}  >
                        <option value={''}>Categoria</option>

                        {categoryFilter.map((cate, index) => {
                            return (
                                <option key={index} > {cate}  </option>
                            )
                        })}
                    </Select>

                </NavItem>
                <NavItem >Carrinho <FiShoppingCart size={'20px'} /> </NavItem>

            </Flex>
        </Box>
    );

    return (
        <Box
            as="section"
            bg="whiteAlpha.800"
            h='100%'
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
                    md: 60,
                }}
                transition=".3s ease"
            >
                <Flex
                    as="header"
                    align="center"
                    justify="space-between"
                    w="full"
                    px="4"
                    bg="whitesmoke"
                    _dark={{
                        bg: "blackAlpha.700",
                    }}
                    borderBottomWidth="1px"
                    borderColor="blackAlpha.300"
                    h="20"

                >
                    <IconButton
                        aria-label="Menu"
                        display={{
                            base: "inline-flex",
                            md: "none",
                        }}
                        onClick={sidebar.onOpen}
                        icon={<FiMenu />}
                        size="sm"
                        flexDir={['column', "", '']}
                    />


                    <InputGroup
                        w="80"
                        m='0 auto'
                        display={['flex']}
                    >
                        <InputLeftElement
                            color="blackAlpha.800"
                            _dark={{
                                color: "whitesmoke"
                            }}
                        >
                            <FiSearch />
                        </InputLeftElement>
                        <Input
                            onChange={onChangeSearch}
                            _dark={{
                                bg: "blackAlpha.300",
                                color: "white"
                            }} placeholder="Pesquisar Produto " />
                    </InputGroup>
                    <Flex w={'50%'} display={['none', '']} align='center'  >
                        <Text as='b' fontSize={'xl'} > House Store</Text>
                    </Flex>
                    <MenuSimple />
                    <ColorMode />
                </Flex>

                <Flex
                    py={3}
                    m='0 auto'
                    w={'75vw'}
                    flexWrap='wrap'
                    justifyContent={'center'}
                    alignItems={'center'} >
                    <CaptionCarousel />
                    {produtos.filter(((produto) => {
                        return !produto ? produto : produto.brand === brand
                    }))
                        .filter(((produto) => {
                            return !produto ? produto : produto.category === categorias
                        }))
                        .filter((produto) => {
                            return !produto ? produto : produto.title.toLowerCase().includes(search.toLowerCase())
                        }).map((produto) => {
                            return (
                                <Box key={produto.id}>
                                    <NewCard
                                        produto={produto} />
                                </Box>
                            )
                        })}
                    {isOpen && <ModalDetails />}
                </Flex>

            </Box>
        </Box>
    );
};