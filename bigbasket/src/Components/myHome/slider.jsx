import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import {   Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import slide1 from "../../assets/slide1.png"
import  slide2 from "../../assets/slide2.png"
import slide3 from "../../assets/slide3.png"
import slide4 from "../../assets/slide4.png"
const Slider = () => {
    const images = [
       slide1,slide2,slide3,slide4
    ];

  return (
    <Slide scale={0.7} indicators={true} duration={4000}>
      {images.map((each, index) => (
          <Box key={index} style={{ width: "100%" }}>
              <Image style={{ objectFit: "cover", width: "100%" }} alt="crowser-image" src={each}     boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
/>
          </Box> 
      ))}
    </Slide>
  );
};

export default Slider;