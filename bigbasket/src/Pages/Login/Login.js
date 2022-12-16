import React, { useEffect } from "react";
import axios from "axios";

import {
  FormLabel,
  Input,
  Stack,
  Box,
  Flex,
  Button,
  Text,
  Switch,
  IconButton,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Login() {


  let [theme, setTheme] = useState(false);
  let [loginCred, setLoginCred] = useState({
    email: "",
    password: "",
  });
  
  let [loginData, setLoginData] = useState([]);
  let [status, setStatus] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  let loginUser = async () => {
    let res = await axios.get("http://localhost:3004/users");
    setLoginData(res.data);
  };
  useEffect(() => {
    loginUser();
  }, [status]);

  let checkUser = () => {
    for (let i = 0; i < loginData.length; i++) {
      if (
        loginData[i].email === loginCred.email &&
        loginData[i].password === loginCred.password
      ) {
        console.log("login success");
        return;
      } else {
        newUser(loginCred);
        setStatus((prev)=>!prev);
        console.log("sign up & login success");
        
        return;
      }
    }
  };

  let newUser = async (loginCred) => {
    let res = await axios.post("http://localhost:3004/users", loginCred);
  };

  // --------------------------------------------------
  return (
    <>
      <Text fontSize={12} pl="2" onClick={onOpen}>Login / Sign Up</Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={"355px"} h="540px">
          <Box
            w="355px"
            h="540px"
            m={"auto"}
            borderRadius="5px"
            alignItems="center"
            
            bgColor={theme ? "blackAlpha.900" : "whiteAlpha.50"}
            color={theme ? "whiteAlpha.900" : "blackAlpha.900"}
          >
            <Flex justify={"center"} ml="80px">
              <Text fontSize="15px" color="#84C225" fontWeight={"700"} m="20px">
                LOGIN / SIGN UP
              </Text>

              <IconButton
                aria-label="toggle theme"
                rounded="full"
                size="xs"
                mt={"20px"}
                ml="50px"
                onClick={() => setTheme(!theme)}
                icon={theme ? <FaSun color="black" /> : <FaMoon />}
              />
            </Flex>
            <Flex h={"400px"} flexDirection="column" justify="space-between">
              <Flex
                h="150px"
                w={"100%"}
                flexDirection="column"
                justify="space-between"
                align={"center"}
              >
                <Box>
                  <FormLabel mt={"15px"}>Enter Email</FormLabel>
                  <Input
                    variant={"flushed"}
                    pl="2"
                    borderBottom="2px solid"
                    type="email"
                    h={"40px"}
                    w="295px"
                    onChange={(e) =>
                      setLoginCred({ ...loginCred, email: e.target.value })
                    }
                  />
                </Box>
                <Box>
                  <FormLabel mt={"15px"}>Enter Password</FormLabel>
                  <Input
                    variant={"flushed"}
                    pl="2"
                    borderBottom="2px solid"
                    type="password"
                    h={"40px"}
                    w="295px"
                    onChange={(e) =>
                      setLoginCred({ ...loginCred, password: e.target.value })
                    }
                  />
                </Box>
              </Flex>
              <Flex h={"40px"} w="100%" justify={"center"}>
                <Button
                  bgColor={"#84C225"}
                  w={"295px"}
                  h="40px"
                  border="none"
                  borderRadius={"5px"}
                  color={"white"}
                  onClick={checkUser}
                >
                  Continue
                </Button>
              </Flex>
            </Flex>
            <Text fontSize="xs" m={"10px 15px"} align="center">
              By continuing, I accept TCP-bigbasket’s Terms and Conditions and
              Privacy Policy.
            </Text>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}
