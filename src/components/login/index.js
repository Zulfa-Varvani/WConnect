import React, { useState } from "react";
import {
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  SimpleGrid,
  InputRightElement,
  Container
} from "@chakra-ui/react";
import { login } from "../config";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [type, setType] = useState("");

    const handleShowClick = () => setShowPassword(!showPassword);

    async function handleLogin() {
      try {
          await login(email, password);
          const path = "/dashboard-" + type;
          navigate(path);
      } catch(error) {
          console.error(error);
          alert("error!");
      }
    }

    return (
      <>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={163}>
            <img src={require("./login.png")} alt="hands" height="581" width="581"/>
            <Stack
              flexDir="column"
              mb="2"
              justifyContent="center"
              alignItems="center"
            >
              <Avatar bg="#120D31" />
              <Heading color="#120D31">Welcome!</Heading>
              <Box minW={{ base: "90%", md: "468px" }}>
                <form onSubmit={e => e.preventDefault() && false}>
                  <Stack
                    spacing={4}
                    p="1rem"
                    backgroundColor="whiteAlpha.900"
                    boxShadow="md"
                  >
                      <FormControl>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<CFaUserAlt color="gray.300" />}
                          />
                          <Input placeholder="Type (mentor, mentee, mhs)" value={type} onChange={e => setType(e.target.value)}/>
                        </InputGroup>
                      </FormControl>
                    <FormControl>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<CFaUserAlt color="gray.300" />}
                        />
                        <Input type="email" placeholder="email address" value={email} onChange={e => setEmail(e.target.value)}/>
                      </InputGroup>
                    </FormControl>
                    <FormControl>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          color="gray.300"
                          children={<CFaLock color="gray.300" />}
                        />
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          value={password} onChange={e => setPassword(e.target.value)}
                        />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                            {showPassword ? "Hide" : "Show"}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                    <Button
                      borderRadius={0}
                      type="submit"
                      variant="solid"
                      backgroundColor="#120D31"
                      color="white"
                      width="full"
                      onClick={handleLogin}
                    >
                      Login
                    </Button>
                  </Stack>
                </form>
              </Box>
              <Box>
                New to us?{" "}
                <Link color="#120D31" href="/">
                  Sign Up
                </Link>
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>
        <Container  style={{ backgroundColor: '#120D31', maxWidth: '100%' }}>
          <Footer/>
        </Container>
        </>
    );
}

export default Login;