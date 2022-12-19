import React, { useEffect } from "react";

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
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../Redux/auth/authSlice";

export default function Signup() {
  let [theme, setTheme] = useState(false);
  let [passwordVisible, setPasswordVisible] = useState(false);
  let toast = useToast();

 
  let [loginCred, setLoginCred] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { firstName, lastName, email, password } = loginCred;
  
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let { user, isSuccess, isError } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isError) {
      alert("error 404");
    }
    if (user && isSuccess) {
      alert("sign up successfully");
    }
    dispatch(reset());
  }, [isError, user, isSuccess, dispatch]);

  const handleSignUp = () => {
    if (!firstName || !lastName || !email || !password) {
      return toast({
        title: "Enter all credentials",
        position: "top",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }
    if (!email.includes("@gmail.com")) {
      return toast({
        title: "Not a valid Email.",
        description: "Enter a valid email",
        position: "top",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }if(password.length<8){
      return toast({
        title: "Minimum password length required",
        description: "Password should be at least 8 characters",
        position: "top",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
     else {
      dispatch(register(loginCred));
       toast({
        title: "Signup Successful",
        position: "top",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate("/login");
    }
  };

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
              SIGN UP
            </Text>

            <IconButton
              bgColor={"#84C225"}
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
            <Flex flexDirection="column" justify="space-between">
              <Flex
                w={"100%"}
                px="10px"
                justify={"space-around"}
                align="center"
              >
                <Box>
                  <FormLabel mt={"15px"}>FirstName</FormLabel>
                  <Input
                    variant={"flushed"}
                    borderBottom="2px solid"
                    type="text"
                    h={"40px"}
                    w="132px"
                    value={loginCred.firstName}
                    onChange={(e) =>
                      setLoginCred({
                        ...loginCred,
                        firstName: e.target.value,
                      })
                    }
                  />
                </Box>
                <Box>
                  <FormLabel mt={"15px"}>LastName</FormLabel>
                  <Input
                    variant={"flushed"}
                    borderBottom="2px solid"
                    type="text"
                    h={"40px"}
                    w="132px"
                    value={loginCred.lastName}
                    onChange={(e) =>
                      setLoginCred({ ...loginCred, lastName: e.target.value })
                    }
                  />
                </Box>
              </Flex>

              <Flex
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
                    value={loginCred.email}
                    onChange={(e) =>
                      setLoginCred({ ...loginCred, email: e.target.value })
                    }
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
                        value={loginCred.password}
                        onChange={(e) =>
                          setLoginCred({
                            ...loginCred,
                            password: e.target.value,
                          })
                        }
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
                  Already a member?{" "}
                </Text>
              </Flex>
              <Flex
                flexDirection={"row"}
                w="295px"
                justifyContent="space-between"
              >
                <Box>
                  <Link to={"/login"}>
                    <Button
                      colorScheme="blue"
                      w={"85px"}
                      h="40px"
                      border="none"
                      borderRadius={"5px"}
                      color={"white"}
                    >
                      Login
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
                    onClick={handleSignUp}
                  >
                    Sign Up
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
