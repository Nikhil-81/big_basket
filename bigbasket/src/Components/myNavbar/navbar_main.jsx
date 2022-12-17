import {
  Box,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import logo from "../../assets/logo.jpeg";
import "./navbar_main.css";
import Location from "./location";
import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import basket from "../../assets/basket.png";
import { useState } from "react";
import { useEffect } from "react";
import Category from "./catagory";
import {BsTelephone} from "react-icons/bs"
import {CgProfile} from "react-icons/cg"
import {FaTag} from "react-icons/fa"
import Login from "../../Pages/Login/Login";
import { Link } from "react-router-dom";
const NavbarMain = () => {
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {}, [isShown]);
  console.log(isShown);
 
  return (
    <Box >
      <Box className="main">
        <Box className="navbar">
          <Box className="box-1">
            <Box display="flex" textAline="center" justifyContent={"center"}>
              {" "}
              <BsTelephone  fontSize={18}/> 1860 123 1000{" "}
            </Box>
            <Box display="flex" textAline="center">
              <Location />
            </Box>
            <Box display="flex" textAline="center">
              <CgProfile fontSize={20} />  <Login/>
            </Box>
          </Box>
          <Box className="box-2">
            <Image
              w="200px"
              h="80px"
              mt="-25px"
              objectFit="contain"
              src={logo}
              alt="my basket"
            />
            <Box width="50%" border="0.5px solid #70716f " borderRadius={5}>
              <InputGroup size="sm" width="100%">
                <Input type="text" placeholder="Search for Products..." borderRadius={5}/>
                <InputRightAddon
                  bg="#84c225"
                  borderRightRadius={5} borderBottomRadius={5}
                  children={<Search2Icon color="white"/>}
                />
              </InputGroup>
            </Box>
            <Box display="flex" padding="10px" gap="10px" bg="#f2f2f2">
              <Image src={basket} w={8} h={8} alt="basket" />
              <Link to="cart">
              <Box textAlign="right">
                <Text fontSize={14}>My Basket</Text>
                <Text fontSize={14}>{0} Items</Text>
              </Box>
              </Link>
            </Box>
          </Box>
          <Box className="box-3">
            <Box
              cursor="pointer"
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              display="flex"
              w="fit-content"
              padding="0px 10px 0px 10px"
              gap="63px"
              h="40px"
              bg="#84c225"
              color="white"
              alignItems="center"
            >
              <Text fontWeight={700} fontSize="14px">SHOPE BY CATEGORY</Text>
              <ChevronDownIcon fontSize="25px" />
            </Box>
            <Box className="offers">
              <FaTag color="red" fontSize={18}/>
             <Text fontSize={14}  textAlign="center"> OFFERS</Text> </Box>
          </Box>
        </Box>
      
      </Box>
      <Box w="100%" h="135px"></Box>
      {isShown && (  <Box position="fixed" w="100%" h="auto"   >
        
        <Category Enter={() => setIsShown(true)}
        Leave={() => setIsShown(false)}/>
        </Box>
      )}
    </Box>
  );
};
export default NavbarMain;
