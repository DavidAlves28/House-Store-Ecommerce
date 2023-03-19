import { Box, Button, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/coordinator";
import errorbg from '../../assets/imgs/errorbg2.jpg'
import houseStore from '../../assets/imgs/store.png'
export default function ErrorPage() {
    const navigate = useNavigate()
    return (
        <>
            <Box
            bg='facebook.700'
                h='100vh' w='100vw'
                bgImage={errorbg}
                backgroundRepeat='no-repeat'
                backgroundSize={'contain'}
                backgroundPosition="center"
                >
            <Button  w='250px' h='14vh' colorScheme={'cyan'} onClick={() => goToHome(navigate)} > <Image size='80%' src={houseStore} />  House Store </Button>


            </Box>
        </>
    )
}