
import React, { useContext, useState } from 'react';
import { Box, Button, IconButton, Image, Stack, useBreakpointValue } from '@chakra-ui/react';
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
  const side = useBreakpointValue({ base: '30%', md: '210px' });

  return (
    <Box
      position={'relative'}
      h={['30vh','360px']}
      width={['','90%']}
      m='0 auto'
      // shadow={'base'}
      rounded='lg'
      align={'center'}
      overflow={'hidden'}
      >
     
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
        zIndex={1}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {produtos.slice(5,15).map((prod, index) => (
        
          <Stack key={index}  align={'center'} >
          <Image src={prod.images[0]}/>
          </Stack>
        ))}
          
      </Slider>
    </Box>
  );
}
