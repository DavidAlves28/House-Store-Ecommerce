import { CheckIcon } from "@chakra-ui/icons";
import { Button, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, Text, useToast } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { BASE_URL } from "../../constants/Base_url";

import { GlobalContext } from "../../GlobalContext/GlobalContext";
import { useRequestData } from "../../hooks/useRequestData";


export function ModalDetails() {
  const context = useContext(GlobalContext)
  const { onClose, isOpen, productAdd, addToCart, toast } = context


  const [data] = useRequestData(`${BASE_URL}/products/${productAdd}`, {})

  return (
    <>

      <Modal isCentered size={['sm', '5xl']} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {!data ?
          <Spinner />
          :
          <ModalContent shadow={'dark-lg'}   >
            <ModalHeader
              fontSize={['md', '2xl']}
              letterSpacing={2}
              fontWeight='extrabold'
              align='center'>
              {data.title}
            </ModalHeader>
            <ModalCloseButton colorScheme={'red'} />
            <ModalBody shadow={'2xl'} >
              <Text fontWeight='extrabold' textTransform={'capitalize'} >{data.category}</Text>
              <Text fontWeight='extrabold' >{data.brand}</Text>
              <Flex
                flexDir={['column', 'row']}
                justifyContent={'space-between'}
                px={2}
                py={3}
                alignItems='center'   >
                <Image src={data.thumbnail} />

                <Flex
                  h={['150px']}
                  px={2}
                  justifyContent='space-between'
                  alignContent={'center'}
                  flexDir={'column'}>
                  <Text
                    fontWeight="bold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}

                  >R$ {data.price},00</Text>
                  <Text  >{data.description}</Text>
                  <Button
                    alignSelf={'end'}
                    w='50%'
                    p={23}
                    colorScheme={'whatsapp'}
                    onClick={() => {
                      addToCart(data)
                      toast({
                        title: `${data.title}`,
                        description: "Item adicionado ao carrinho",
                        status: 'success',
                        duration: 9000,
                        position: 'top',
                        isClosable: true,
                      })
                    }} >Add ao carrinho</Button>
                </Flex>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button p={5} colorScheme={'red'} onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>}

      </Modal>
    </>
  )
}