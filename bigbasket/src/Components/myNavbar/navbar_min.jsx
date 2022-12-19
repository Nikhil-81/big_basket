
import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  
} from "@chakra-ui/react";

import DrawerHam from "./Drawer";

import "./navbar_min.css";
import { Search2Icon } from "@chakra-ui/icons";
import {CgProfile} from "react-icons/cg"
import { Link } from "react-router-dom";
const NavbarMin = () => {
  return (
    <Box>
     
      <Box className="navMin">
        <Box className="navContent">
          <DrawerHam />
          <Link to="/">
          <Heading
            color="white"
            fontSize={30}
            fontWeight={400}
            fontFamily="sans-serif"
          >
            bigbasket
          </Heading>
          </Link>
          <CgProfile fontSize={30} style={{ color: "white" }} />
        </Box>
        <Box w="99%" h="auto" margin="auto" mb="5px" bg="white" borderRadius={5} display="flex"> 
        <InputGroup size="sm" width="100%">
                <Input placeholder="Search for Products..." />
                <InputRightAddon
                  bg="#84c225"
                  children={<Search2Icon color="white" />}
                />
              </InputGroup>
        </Box>
      </Box>
      <Box w="100%" h="99px" border="1px solid"></Box>
    </Box>
  );
};
export default NavbarMin;
