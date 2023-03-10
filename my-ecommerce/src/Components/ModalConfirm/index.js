import { CheckIcon } from "@chakra-ui/icons";
import { Button, Modal, ModalContent,ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { useContext } from "react";

import { GlobalContext } from "../../GlobalContext/GlobalContext";


export function ModalConfirm() {
    const context = useContext(GlobalContext)
    const {onOpen,onClose,isOpen, pokeAdd,carrinhoMenu} = context 
    
    return (
      <>
        <Button onClick={onOpen}>Trigger modal</Button>
  
        <Modal onClose={onClose} isOpen={isOpen} left='200px' isCentered >
          <ModalOverlay />
          <ModalContent w={['80vw','30vw']} bg={'whatsapp.200'}  >
            <ModalHeader> <CheckIcon/> <Text fontSize={'xl'} as='b' >{pokeAdd} </Text>Pokemon Adicionado ao carrinho! </ModalHeader>            
          </ModalContent>
        </Modal>
      </>
    )
  }