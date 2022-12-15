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
import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const DrawerBottom = () => {
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
              <Text>Fruits & Vegetables</Text>
              <Text>Foodgrains, Oil & Masala</Text>
              <Text> Bakery, Cakes & Dairy</Text>
              <Text>Beverages</Text>
              <Text>Snacks & Branded Foods</Text>
              <Text>Beauty & Hygiene</Text>
              <Text> Cleaning & Household</Text>
              <Text>Kitchen, Garden & Pets</Text>
              <Text>Eggs, Meat & Fish</Text>
              <Text> Gourmet & World Food</Text>
              <Text> Baby Care</Text>
              <Text>View A</Text>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default DrawerBottom;
