import { Button,Image, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import logoHouse  from '../../assets/imgs/store.png'
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ModalConfirmb() {
    const context= useContext(GlobalContext)
 

    const { onOpen , onClose , isOpen  , carrinhoMenu } = context 



    
    return (
      <>
        <Button onClick={onOpen}>Trigger modal</Button>
  
        <Modal  onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent bg='whatsapp.400'  shadow='base' >
            <ModalHeader> <Image align={'center'} src={logoHouse}  /> Obrigado por comprar na House Store</ModalHeader>           
            <ModalBody>
            Produto: 
              {carrinhoMenu.map((item)=>{
                return (
                    <>
                        <Text fontWeight={'bold'} >
                            {item.name}
                        </Text>
                    </>
                )
              })}
            </ModalBody>
            <ModalFooter>
            
              <Link href='https://github.com/DavidAlves28' target="_blank"    ><FaGithub size="40px" />  </Link>
              <Link href="https://www.linkedin.com/in/david-alves-costa-7a2b90145/" target='_blank'  > <FaLinkedin size="40px"/></Link>
            </ModalFooter>
          </ModalContent>

              

        </Modal>
      </>
    )
  }