import { Box, Button, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { useParams } from "react-router-dom"

import { BASE_URL } from "../../constants/Base_url"
import { GlobalContext } from "../../GlobalContext/GlobalContext"
import { useRequestData } from "../../hooks/useRequestData"
import { FaCartArrowDown } from "react-icons/fa";
import { StarIcon } from "@chakra-ui/icons"
import SideBarDetailsPage from "../../Components/SideBarMenu/sideBarDetailsPage"

export default function DetailsPage() {

  const { id } = useParams()
  const context = useContext(GlobalContext)
  const { addToCart, toast } = context
  const [data] = useRequestData(`${BASE_URL}/products/${id}`, {})

  const imagens = data.images && data.images.map((image) => {
    return (
      <Box
        w={['', '500px']}
        key={image}
        m={'2vh'}
        minH='200px'>
        <Image
          rounded={'20px'}
          w='100%'
          src={image}
          _hover={{
            transform: 'scale(1.1)',
            shadow: 'base'
          }}
        />
      </Box>

    )
  })
  return (
    <Box
      w='99vw'
      m='0 auto'
      minH='100vh'
    >
      <SideBarDetailsPage />
      <Flex
        w={['full', '', '70vw']} 
        minH='70vh'
        p={3}
        mt={['50px', '']}
        rounded={2}
        shadow='2xl'
        ml={['0px','', '300px']}
        justifyContent='space-evenly'
        alignItems={'flex-start'}
        flexDir={['column', 'column', 'column']}
      >
        <Flex
          w='100%'
          justifyContent={'flex-start'}
          alignItems='center'
          gap={2}
          p={2}
        >

          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                w=''
                _hover={{
                  transform: 'scale(1.1)',
                  shadow: 'base'
                }}
                h='30px'
                key={i}
                color={i < data.rating ? "teal.500" : "gray.300"}
              />
            ))}

          <Box as="span" ml="2" color="black.350" fontSize='xl'>
            {data.rating}

          </Box>
        </Flex>


        <Button
          justifyContent={'center'}
          mt={2}
          h='8vh'
          zIndex={1}
          alignSelf={'flex-end'}
          pos={['sticky', '']}
          top={['9vh']}
          leftIcon={<FaCartArrowDown size='30px' />}
          minW={['full', '200px', '30%']}
          p={[23,]}
          shadow='2xl'
          colorScheme={'facebook'}
          fontSize={['xl']}
          _hover={{
            transform: 'translateY(-4px)',
            color: "azure",
            bg: 'cyan',
            border: 'none',
            shadow: 'base'
          }}
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
          }} > Add ao carrinho <Text fontSize={'xl'} m={2} >R$ {data.price},00</Text> </Button>

        <Flex
          justifyContent={'space-around'}
          ml='40px'
          flexDir={['column']}   >
          <Heading p={2} size='2xl' >{data.title}</Heading>
          <Divider />
          <Box

            fontSize={{ base: '30px', lg: '28px' }}
            color={'yellow.600'}
            _dark={{
              color: 'yellow.300'
            }}
            fontWeight={'500'}
            textTransform={'uppercase'}
          >
            Marca :  <Text fontWeight='semibold' color={'black'} _dark={{color:'white'}} > {data.brand}</Text>
          </Box>
          <Divider />



          <Divider />
          <Box
            fontSize={{ base: '30px', lg: '28px' }}
            color={'yellow.600'}
            _dark={{
              color: 'yellow.300'
            }}
            fontWeight={'500'}
            textTransform={'normal'}
          >
            Categoria :  <Text fontWeight='semibold' color={'black'} _dark={{color:'white'}}  > {data.category}</Text>
          </Box>
          <Divider />
          <Box
            fontSize={{ base: '30px', lg: '28px' }}
            color={'yellow.600'}
            _dark={{
              color: 'yellow.300'
            }}
            fontWeight={'500'}
            textTransform={'capitalize'}
          >
            Descrição :  <Text fontWeight='semibold' color={'black'}  _dark={{color:'white'}} > {data.description}</Text>
          </Box>

        </Flex>

        <Flex
          p={3}
          m=' 0 auto'
          w='100%'
          gap='2%'
          shadow={'lg'}
          flexWrap='wrap'
          flexDir={['column', 'row']}
          justifyContent={'center'}
        >

          {imagens}
        </Flex>

      </Flex>

    </Box>
  )
}