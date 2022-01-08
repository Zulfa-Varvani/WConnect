import React, { useState } from "react";
import { FormControl, FormLabel, Heading, Input, Box, Flex, Button } from "@chakra-ui/react";
import { login } from "../config";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("");
    const navigate = useNavigate();

    async function handleLogin() {
      try {
          await login(email, password);
          let name = "/dashboard-" + type;
          console.log(name);
          navigate(name);
      } catch(error) {
          console.error(error);
          alert("error!");
      }
    }

    return (
      <div>
        <img src={require("./login.png")} alt="hands" height="581" width="581"/>
        <Flex width="full" align="center" justifyContent="center">
          <Box p={2}>
            <Box textAlign="center">
              <Heading>Create Account</Heading>
            </Box>
            <Box my={4} textAlign="left">
              <form onSubmit={e => e.preventDefault() && false}>
                <FormControl>
                  <FormLabel>Mentee/Mentor/Specialist</FormLabel>
                  <Input type="type" placeholder="Mentee" value={type} onChange={e => setType(e.target.value)}/>
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="test@test.com" value={email} onChange={e => setEmail(e.target.value)}/>
                </FormControl>
                <FormControl mt={6}>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" placeholder="*******" value={password} onChange={e=>setPassword(e.target.value)}/>
                </FormControl>
                <Button width="full" mt={4} type="submit" onClick={handleLogin}>
                  Sign In
                </Button>
              </form>
            </Box>
          </Box>
      </Flex>
      </div>
    );
}

export default Login;