import { CheckIcon } from "@chakra-ui/icons";
import { Button, Center, Divider, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, Text, useColorModeValue } from "@chakra-ui/react";
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

      <Modal isCentered size={['sm', 'md', '5xl']} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {!data ?
          <Spinner />
          :
          <ModalContent shadow={'dark-lg'}   >
            <ModalHeader
              fontSize={['md', '2xl']}
              letterSpacing={2}
              fontWeight='bold'
              align='center'>
              {data.title}
            </ModalHeader>
            <ModalCloseButton colorScheme={'red'} />
            <ModalBody shadow={'2xl'} >

              <Flex
                flexDir={['column', 'row']}
                justifyContent={'space-between'}
                px={2}
                py={3}
                alignItems='center'   >
                <Image w={['', '50%', '70%']} rounded="lg" src={data.thumbnail} />

                <Flex
                  my={2}
                  h={['','200px','270px']}
                  px={['5px', '25px']}
                  justifyContent='space-between'
                  alignContent={'center'}
                  flexDir={'column'}>
          
                 
                  <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    color={'yellow.600'}
                    _dark={{
                      color: 'yellow.300'
                    }}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                  >
                    Categoria :  <Text fontWeight='semibold' color={'black'}  > {data.category}</Text>
                  </Text>
                  <Divider />

                  <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    color={'yellow.600'}
                    _dark={{
                      color: 'yellow.300'
                    }}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                  >
                    Marca :  <Text fontWeight='semibold' color={'black'} > {data.brand}</Text>

                  </Text>
                  <Divider />
                  <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    color={'yellow.600'}
                    _dark={{
                      color: 'yellow.300'
                    }}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                  >
                    Preço : <Text fontSize={'md'} color='black' >R$ {data.price},00</Text>
                  </Text>

                  <Divider />
                  <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    color={'yellow.600'}
                    _dark={{
                      color: 'yellow.300'
                    }}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                  >
                    Descrição
                  </Text>
                  <Text fontWeight={'semibold'} >{data.description}.</Text>
                  <Divider />

                  <Button
                    m={'0 auto'}
                    mt={2}
                    alignSelf={'end'}
                    minW={['100', '200px', '50%']}
                    p={[23, ]}
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