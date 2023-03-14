import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/coordinator";

export default function ErrorPage () { 
    const navigate = useNavigate()
    return ( 
        <> 
        <Button  onClick={()=>goToHome(navigate)} > ir Para Home </Button>
        </>
    )
}