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
import { useDispatch, useSelector } from "react-redux";
import { Usert_logout_request } from "../../Redux/auth/actions";
const DrawerHam = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
const dispatch=useDispatch()
const auth_state=useSelector((store)=>store.auth)
console.log(auth_state)
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
          {auth_state.auth_sucess?(<Text bg="black" color="white">{auth_state.user}</Text>):("")}
        
          <DrawerCloseButton color={"white"} />
          <DrawerHeader bg="black" color="white" h="50px">
            {auth_state.auth_sucess?(""):(
              <Link to="/login">
            <Button
              h="40px"
              fontSize={14}
              w="fit-content"
              bg="black"
              border="1px solid white"
              onClick={onClose}
            >
              Login/Sign Up
              {/* <Login/> */}
            </Button>
            </Link>
            )}
            
          </DrawerHeader>

          <DrawerBody cursor="pointer"> 
            <Box fontSize={14} mt="5px" >
              <Location />
            </Box>
            <Box className="pointer">
              <Text onClick={onClose}>Home</Text>
              <Link onClick={onClose} to="/cart" ><Text>Smart Basket/My List</Text></Link>
               <Box><DrawerBottom /> </Box>
              <Text onClick={onClose}>Offers <span className="new">new</span></Text>
              <Text onClick={onClose}>The Beauty Store</Text>
              <Text onClick={onClose}>bb Wellness</Text>
              <Text onClick={onClose}>FAQ</Text>
              {auth_state.auth_sucess?(<Button colorScheme="red" onClick={()=>dispatch(Usert_logout_request())} >Logout</Button>):("")}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default DrawerHam;
