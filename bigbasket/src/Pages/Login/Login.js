import React, { useEffect } from "react";
import axios from "axios";

import {
  FormLabel,
  Input,
  Box,
  Flex,
  Button,
  Text,
  IconButton,
  useToast,
} from "@chakra-ui/react";

import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  let [theme, setTheme] = useState(false);
  let [passwordVisible, setPasswordVisible] = useState(false);
  let toast = useToast();

  let [loginCred, setLoginCred] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  let [userData, setUserData] = useState([]);

 
  // --------------------------------------------------
  return (
    <>
      <Box
        w={"355px"}
        h="540px"
        mx={"auto"}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      >
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
              LOGIN
            </Text>

            <IconButton
              aria-label="toggle theme"
              bgColor={"#84C225"}
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
                  borderBottom="2px solid"
                  type="email"
                  h={"40px"}
                  w="295px"
                />
              </Box>
              <Box>
                <Flex>
                  <Box>
                    <FormLabel mt={"15px"}>Enter Password</FormLabel>
                    <Input
                      variant={"flushed"}
                      borderBottom="2px solid"
                      type={passwordVisible ? "text" : "password"}
                      h={"40px"}
                      w="280px"
                    
                    />
                  </Box>
                  <Box display="flex" flexDirection="column-reverse">
                    <Text
                      pb="10px"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      <IconButton
                        bgColor={"#84C225"}
                        aria-label="Call Segun"
                        size="xs"
                        icon={
                          passwordVisible ? (
                            <RiEyeFill color="black" />
                          ) : (
                            <RiEyeCloseFill color="black" />
                          )
                        }
                      />
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>

            <Flex
              h={"60px"}
              w="100%"
              flexDirection="column"
              align={"center"}
              justify="end"
            >
              <Flex w="100%">
                <Text ml={"30px"} mb="5px" as="sup">
                  Create an account?
                </Text>
              </Flex>
              <Flex
                flexDirection={"row"}
                w="295px"
                justifyContent="space-between"
              >
                <Box>
                  <Link to={"/signup"}>
                    <Button
                      colorScheme="blue"
                      w={"85px"}
                      h="40px"
                      border="none"
                      borderRadius={"5px"}
                      color={"white"}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </Box>
                <Box>
                  <Button
                    bgColor={"#84C225"}
                    _hover={{
                      bgColor: "#5e9112",
                    }}
                    w={"200px"}
                    h="40px"
                    border="none"
                    borderRadius={"5px"}
                    color={"white"}
                    // onClick={onSubmit}
                  >
                    Login
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </Flex>
          <Text fontSize="xs" m={"10px 15px"} align="center">
            By continuing, I accept TCP-bigbasket’s Terms and Conditions and
            Privacy Policy.
          </Text>
        </Box>
      </Box>
    </>
  );
}
