import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Box,
  Text,
} from "@chakra-ui/react";
import "./Drawer.css"
import React from "react";
import DrawerBottom from "./BottomDrower";
import Location from "./location";
import Login from "../../Pages/Login/Login";
import { Link } from "react-router-dom";
const DrawerHam = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <HamburgerIcon ref={btnRef} colorScheme="teal" onClick={onOpen} fontSize="35px" color="white" />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent p="0%" m="0%">
          <DrawerCloseButton color={"white"} />
          <DrawerHeader bg="black" color="white" h="50px">
            <Button
              h="40px"
              fontSize={14}
              w="fit-content"
              bg="black"
              border="1px solid white"
            >
              <Login/>
            </Button>
          </DrawerHeader>

          <DrawerBody cursor="pointer"> 
            <Box fontSize={14} mt="5px" >
              <Location />
            </Box>
            <Box className="pointer">
              <Text>Home</Text>
              <Link to="/cart" ><Text>Smart Basket/My List</Text></Link>
               <Box><DrawerBottom /> </Box>
              <Text>Offers <span className="new">new</span></Text>
              <Text>The Beauty Store</Text>
              <Text>bb Wellness</Text>
              <Text>FAQ</Text>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default DrawerHam;
