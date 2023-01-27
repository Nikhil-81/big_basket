import "./BottomDrower.css"
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const c1 = [
  "vegetables",
  "Oil",
  "Masala",
  "SNACKS & BRANDED FOODS",
  "EGGS, MEAT & FISH",
  "CLEANING & HOUSEHOLD",
  "Tea",
  "Beauty & Hygiene",
  " Cleaning & Household",
  " Bakery, Cakes & Dairy",
  " Baby Care",
  "View A",
];
const DrawerBottom = () => {
  const [cat1] = useState(c1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Text ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Shop by Category <ChevronRightIcon/>
      </Text>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={"white"} />
          <DrawerHeader>Category</DrawerHeader>

          <DrawerBody>
            <Box className="categoryD">
            {cat1?.map((el, index) => {
            return <Box key={index}> <Link onClick={onClose} to={`/products/${el}`} > <li key={index}>{el}</li> </Link> <hr/></Box>;
          })}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default DrawerBottom;
