
import React, { useContext, useState } from 'react';
import { Box, Button, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { GlobalContext } from '../../GlobalContext/GlobalContext';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  
  const [slider, setSlider] = useState();
  const context = useContext(GlobalContext)
  const { produtos } = context

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  return (
    <Box
      position={'relative'}
      height={['55vh','460px']}
      width={['','full']}
      m='0 auto'
      // shadow={'base'}
      rounded='lg'
      
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
     
      <IconButton
        aria-label="left-arrow"
        colorScheme="facebook"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={1}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="facebook"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {produtos.slice(2,10).map((prod, index) => (
          <Box
            key={index}
            cursor='po'
            height={'xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            backgroundImage={`url(${prod.images[0]})`}
            
          />

        ))}
          <Button>
          </Button>
      </Slider>
    </Box>
  );
}
// import React, { useContext, useState } from 'react';
// import {
//     Box,
//     IconButton,
//     useBreakpointValue,
//     Stack,
//     Heading,
//     Text,
//     Container,
//     Image,
//     Button,
//     Link,
//     Divider,
// } from '@chakra-ui/react';
// // Here we have used react-icons package for the icons
// import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// // And react-slick as our Carousel Lib
// import Slider from 'react-slick';

// import { GlobalContext } from '../../GlobalContext/GlobalContext';
// import { AddIcon } from '@chakra-ui/icons';
// // Settings for the slider
// const settings = {
//     dots: true,
//     arrows: false,
//     fade: true,
//     infinite: true,
//     autoplay: true,
//     speed: 500,
//     autoplaySpeed: 5000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
// };

// export default function CaptionCarousel() {


//     const [slider, setSlider] = useState()    
//     const context = useContext(GlobalContext)
//     const { buyPokemon,produtos } = context
 

//     const top = useBreakpointValue({ base: '90%', md: '50%' });
//     const side = useBreakpointValue({ base: '30%', md: '100px' });
    
//     // Componente responsável por retornar um carrosel de cards em destaque.
       
  
//     return (
//         <Box
//             position={'relative'}
//             height={'320px'}
//             width={'full'}
//             overflow={'hidden'}>
//             {/* CSS files for react-slick */}
//             <link
//                 rel="stylesheet"
//                 type="text/css"
//                 charSet="UTF-8"
//                 href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//             />
//             <link
//                 rel="stylesheet"
//                 type="text/css"
//                 href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//             />
//             {/* Left Icon */}
//             <IconButton
//                 aria-label="left-arrow"
//                 variant="ghost"
//                 position="absolute"
//                 left={side}
//                 top={top}
//                 transform={'translate(0%, -50%)'}
//                 zIndex={2}
//                 onClick={() => slider?.slickPrev()}>
//                 <BiLeftArrowAlt size="50px" />
//             </IconButton>
//             {/* Right Icon */}
//             <IconButton
//                 aria-label="right-arrow"
//                 variant="ghost"
//                 position="absolute"
//                 right={side}
//                 top={top}
//                 transform={'translate(0%, -50%)'}
//                 zIndex={2}
//                 onClick={() => slider?.slickNext()}>
//                 <BiRightArrowAlt size="50px" />
//             </IconButton>
//             {/* Slider */}
//             <Slider {...settings} ref={(slider) => setSlider(slider)}>
//                 {produtos && produtos.map((product, index) => (
//                         <Box
//                             key={index}
//                             height={'full'}
//                             position="relative"
//                             backgroundPosition={['right', "center"]}
//                             backgroundRepeat="no-repeat"
//                             backgroundSize={"contain"}                        
//                             backgroundImage={`url(${product.images[0]})`}
//                             >
                         
//                             <Container
//                                 size="container.lg"
//                                 height={["230px", "280px"]}
//                                 position="relative">
//                                 <Stack
//                                     spacing={2}
//                                     w={'full'}
//                                     maxW={'lg'}
//                                     position="absolute"
//                                     top="50%"
//                                     transform="translate(0, -50%)">
//                                     <Heading
//                                         pos={'absolute'}
//                                         left={['3px', '420px']}
//                                         top={['-70px', '0']}
//                                         w='max-content'
//                                         color={'black'}
//                                         fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
//                                         <Link onClick={() => buyPokemon(product)}>
//                                             {product.title}
//                                         </Link>
//                                         <Divider />
//                                     </Heading>
                                 
//                                 </Stack>
//                             </Container>
//                         </Box>
//                     ))}
//             </Slider>
//         </Box>
//     );
// }