
import { Box, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack } from "@chakra-ui/react";
import { useState } from "react";

export default function SliderPrice() {
    const [sliderValue, setSliderValue] = useState(50)
  
    const labelStyles = {
      mt: '2',
      ml: '-2.5',
      fontSize: 'sm',
    }
  
    return (
      <Box ml='2px'  w={'90%'} pt={6} pb={2}>
        <Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>
          <SliderMark value={0} {...labelStyles}>
            25%
          </SliderMark>
        
          <SliderMark value={100} {...labelStyles}>
            100%
          </SliderMark>
          <SliderMark
            value={sliderValue}
            textAlign='center'
            bg='blue.500'
            color='white'
            mt='-10'
            ml='-5'
            w='12'
          >
            {sliderValue}%
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    )
  }