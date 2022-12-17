import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import daire from "../../assets/daire.png"
import  kitchin from "../../assets/kitchin.png"
import offeron from "../../assets/offeron.png"
import snakes from "../../assets/snakes.png"
const Crowser = () => {
    const images = [
       daire,kitchin,offeron,snakes
    ];

  return (
    <Fade scale={0.7} indicators={true} duration={4000}>
      {images.map((each, index) => (
          <Box key={index} style={{ width: "100%" }}>
              <Image style={{ objectFit: "cover", width: "100%" }} alt="crowser-image" src={each} />
          </Box> 
      ))}
    </Fade>
  );
};

export default Crowser;