import React, { useContext, useState } from 'react';
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,
    Image,
    Button,
    Link,
    Divider,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import pokemons from '../../utils/pokemons.json'
import { getTypes } from '../../utils/returnTypes';
import { getColors } from '../../utils/returnColors';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import { AddIcon } from '@chakra-ui/icons';
// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function CaptionCarousel() {


    const [slider, setSlider] = useState()    
    const context = useContext(GlobalContext)
    const { buyPokemon } = context


    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '100px' });

    // Componente responsável por retornar um carrosel de cards em destaque.
 
    return (
        <Box
            position={'relative'}
            height={'320px'}
            width={'full'}
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
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt size="50px" />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt size="50px" />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {pokemons.slice(0, 20).filter((card) => {
                    return card.evolution !== '1'
                })
                    .map((card, index) => (
                        <Box
                            key={index}
                            height={'full'}
                            position="relative"
                            backgroundPosition={['right', "center"]}
                            backgroundRepeat="no-repeat"
                            backgroundSize={"contain"}
                            bgColor={getColors(card.type[0])}
                            backgroundImage={`url(${card.image})`}>

                            <Container
                                size="container.lg"
                                height={["230px", "280px"]}
                                position="relative">

                                <Stack
                                    spacing={2}
                                    w={'full'}
                                    maxW={'lg'}
                                    position="absolute"
                                    top="50%"
                                    transform="translate(0, -50%)">
                                    <Heading
                                        pos={'absolute'}
                                        left={['3px', '420px']}
                                        top={['-70px', '0']}
                                        w='max-content'
                                        color={'white'}
                                        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
                                        <Link onClick={() => buyPokemon(card)}>
                                            {card.name.english}
                                        </Link>
                                        <Divider />
                                    </Heading>
                                    {card.type.map((type, index) => {
                                        return (
                                            <Box key={index}>
                                                <Image src={getTypes(type)}
                                                    fontSize={{ base: 'md', lg: 'lg' }}
                                                    color="GrayText">
                                                </Image>
                                            </Box>
                                        )
                                    })}
                                </Stack>
                            </Container>
                        </Box>
                    ))}
            </Slider>
        </Box>
    );
}