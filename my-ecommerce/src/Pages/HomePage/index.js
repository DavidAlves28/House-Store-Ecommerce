import { Box, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import CaptionCarousel from "../../Components/Carousel";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import NewCard from "../../Components/CardProduto/index";
import { goToCarrinho } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import FooterInfo from "../../Components/Footer";
import SideBarMenu from "../../Components/SideBarMenu";

export default function HomePage() {
    // Context
    const context = useContext(GlobalContext)
    const { produtos,
        search,
        categorias,
        brand,
        valueMax,
    } = context

    const navigate = useNavigate()
    return (

        <Box  
        w='99vw'
        >

                <SideBarMenu />
            <Flex
                w='100'
                py={10}
                m='0 auto'             
                flexWrap='wrap'
                mb='250px'
                ml={['','290px']}
          
                justifyContent={'center'}
                alignItems={'center'} >
                
                <CaptionCarousel  />

 

                {produtos
                    .filter((produto) => {
                        return !produto ? produto : produto.price <= valueMax
                    })
                    .filter((produto) => {
                        return produto === "" ? produto : produto.brand.includes(brand)
                    })
                    .filter(((produto) => {
                        return produto === "" ? produto : produto.category.includes(categorias)
                    }))
                    .filter((produto) => {
                        return !produto ? produto : produto.title.toLowerCase().includes(search.toLowerCase())
                    })
                    .map((produto) => {
                        return (
                            <Box w={''} key={produto.id}>
                                <NewCard
                                    produto={produto} />
                            </Box>
                        )
                    })}
    
            </Flex>



            <FooterInfo />

        </Box>

    );
};