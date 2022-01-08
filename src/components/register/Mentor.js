import React, {useState} from 'react'
import {
  Container,
  Text,
  Input,
  Button,
  IconButton,
  Divider,
  Link,
  VStack,
  SimpleGrid,
  Box,
  Heading
} from '@chakra-ui/react'
import {
  CopyIcon,
  SmallCloseIcon,
  SearchIcon,
  ArrowLeftIcon,
  CalendarIcon,
  CheckCircleIcon
} from '@chakra-ui/icons'
import { Footer } from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'
import {register, update} from "../config"

const Mentor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const [job, setJob] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    try {
        await register(name, email, password);
        await update(name, email, "mentor", job, null);
        navigate("/dashboard-mentor");
        window.location.reload(false); //reloads page to show updated user name
    } catch(error) {
        console.error(error);
        alert("error!");
    }
  }

  return (
    <>
    <Container maxW="container.xl" marginBottom={24}>
      <VStack mt={20} spacing={5} align="center">
        <Heading maxHeight={20} overflow="visible">
          Create Account
        </Heading>
        <Input placeholder="Full Name" value={name} onChange={e => setName(e.target.value)}/>
        <Input type="email" placeholder="Email" variant="outline" value={email} onChange={e => setEmail(e.target.value)}/>
        <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        <Divider borderColor="blackAlpha.500" mt={3} mb={3} />
        <Text mt={3} fontWeight="bold">
          What are Your Interests?
        </Text>
        <Text>To match you with the right mentee looking for your help, what applies to you.</Text>
        <SimpleGrid columns={[2, null, 3]} spacing='40px' alignItems="center">
          <Box alignContent="center">
            <IconButton
              aria-label="icon"
              icon={<CopyIcon />}
              size="lg"
              display="flex"
              opacity={0.87}
              minWidth={20}
              minHeight={20}
              colorScheme="gray"
              backgroundColor="#F4EEF0"
              color="#120D31"
              value={"Technology"}
              onClick={e=>setJob(e.target.value)}
            />
            <Text color="#4B5563">Technology</Text>
          </Box>
          <Box alignContent="center">
            <IconButton
              aria-label="icon"
              icon={<SmallCloseIcon />}
              size="lg"
              display="flex"
              opacity={0.87}
              minWidth={20}
              minHeight={20}
              backgroundColor="#F4EEF0"
              color="#120D31"
              value={"Engineering"}
              onClick={e=>setJob(e.target.value)}
            />
            <Text color="#4B5563">Engineering</Text>
          </Box>
          <Box alignContent="center">
            <IconButton
              aria-label="icon"
              icon={<SearchIcon />}
              size="lg"
              display="flex"
              opacity={0.87}
              minWidth={20}
              minHeight={20}
              backgroundColor="#F4EEF0"
              color="#120D31"
              value={"Science"}
              onClick={e=>setJob(e.target.value)}
            />
            <Text>Science</Text>
          </Box>
          <Box alignContent="center">
            <IconButton
              aria-label="icon"
              icon={<ArrowLeftIcon />}
              size="lg"
              display="flex"
              opacity={0.87}
              minWidth={20}
              minHeight={20}
              backgroundColor="#F4EEF0"
              color="#120D31"
              value={"Mathematics"}
              onClick={e=>setJob(e.target.value)}
            />
            <Text color="#4B5563">Mathematics</Text>
          </Box>
          <Box alignContent="center">
            <IconButton
              aria-label="icon"
              icon={<CalendarIcon />}
              size="lg"
              display="flex"
              opacity={0.87}
              minWidth={20}
              minHeight={20}
              backgroundColor="#F4EEF0"
              color="#120D31"
              value={"Marketing"}
              onClick={e=>setJob(e.target.value)}
            />
            <Text color="#4B5563">Marketing</Text>
          </Box>
          <Box alignContent="center">
            <IconButton
              aria-label="icon"
              icon={<CheckCircleIcon />}
              size="lg"
              display="flex"
              opacity={0.87}
              minWidth={20}
              minHeight={20}
              backgroundColor="#F4EEF0"
              color="#120D31"
              value={"Finance"}
              onClick={e=>setJob(e.target.value)}
            />
            <Text>Finance</Text>
          </Box>
        </SimpleGrid>
        <Divider borderColor="blackAlpha.500" mt={3} mb={3} />
        <Button
          variant="solid"
          size="md"
          type="submit"
          colorScheme="gray"
          backgroundColor="#120D31"
          color="white"
          opacity={0.91}
          minWidth={250}
          onClick={handleRegister}
        >
          Create Account
        </Button>
        <Text>
          Already have an account?
          <Link pl={1} color="messenger.500" href="/login">
            Click here
          </Link>
        </Text>
      </VStack>
    </Container>
    <Container  style={{ backgroundColor: '#120D31', maxWidth: '100%' }}>
      <Footer/>
    </Container>
    </>
  )
}

export default Mentor;