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

const Mentee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    try {
        await register(name, email, password);
        await update(name, email, "mentee");
        navigate("/dashboard-mentee");
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
        <Text>To match you with the right career mentor, select all that apply to you.</Text>
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
              color="#4B5563"
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
              color="#4B5563"
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
              color="#4B5563"
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
              color="#4B5563"
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
              color="#4B5563"
            />
            <Text>Finance</Text>
          </Box>
        </SimpleGrid>
        <Divider borderColor="blackAlpha.500" mt={3} mb={3} />
        <Text fontWeight="bold" mt={3}>
          What Type of Mental Health Support Do You Need?
        </Text>
        <Text>To match you with the right mental health professional, select all that apply to you</Text>
        <Button
          variant="solid"
          size="lg"
          minWidth={350}
          backgroundColor="#F4EEF0"
          color="#4B5563"
        >
          Mood Disorders
        </Button>
        <Button
          variant="solid"
          size="lg"
          minWidth={350}
          backgroundColor="#F4EEF0"
          color="#4B5563"
        >
          Anxiety Disorders
        </Button>
        <Button
          variant="solid"
          size="lg"
          minWidth={350}
          backgroundColor="#F4EEF0"
          color="#4B5563"
        >
          Personality Disorders
        </Button>
        <Button
          variant="solid"
          size="lg"
          minWidth={350}
          backgroundColor="#F4EEF0"
          color="#4B5563"
        >
          Psychotic Disorders
        </Button>
        <Button
          variant="solid"
          size="lg"
          minWidth={350}
          backgroundColor="#F4EEF0"
          color="#4B5563"
        >
          Eating Disorders
        </Button>
        <Button
          variant="solid"
          size="lg"
          minWidth={350}
          backgroundColor="#F4EEF0"
          color="#4B5563"
        >
          Trauma-related Disorders
        </Button>
        <Button
          variant="solid"
          size="lg"
          minWidth={350}
          backgroundColor="#F4EEF0"
          color="#4B5563"
        >
          Substance abuse Disorders
        </Button>
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

export default Mentee;
