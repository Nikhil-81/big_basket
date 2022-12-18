import { Box } from '@chakra-ui/react';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 6,
            slidesToScroll: 6
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];
const Example = () => {
    return (
        <div>
            <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings}>
                <Box h="300px" display="flex" textAline="centr" bg="red">1</Box>
                <Box h="300px" display="flex" textAline="centr" bg="green">2</Box>
                <Box h="300px" display="flex" textAline="centr" bg="yellow">3</Box>
                <Box h="300px" display="flex" textAline="centr" bg="blue">4</Box>
                <Box h="300px" display="flex" textAline="centr" bg="gray">5</Box>
                <Box h="300px" display="flex" textAline="centr" bg="black">6</Box>
                <Box h="300px" display="flex" textAline="centr" bg="red">1</Box>
                <Box h="300px" display="flex" textAline="centr" bg="green">2</Box>
                <Box h="300px" display="flex" textAline="centr" bg="yellow">3</Box>
                <Box h="300px" display="flex" textAline="centr" bg="blue">4</Box>
                <Box h="300px" display="flex" textAline="centr" bg="gray">5</Box>
                <Box h="300px" display="flex" textAline="centr" bg="black">6</Box>
                <Box h="300px" display="flex" textAline="centr" bg="red">1</Box>
                <Box h="300px" display="flex" textAline="centr" bg="green">2</Box>
                <Box h="300px" display="flex" textAline="centr" bg="yellow">3</Box>
                <Box h="300px" display="flex" textAline="centr" bg="blue">4</Box>
                <Box h="300px" display="flex" textAline="centr" bg="gray">5</Box>
                <Box h="300px" display="flex" textAline="centr" bg="black">6</Box>
            </Slide>
        </div>
    );
};

export default Example;