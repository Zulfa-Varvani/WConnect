import React from "react";
import { Heading, Stack, Container, SimpleGrid, Flex, Image, Text, Button, Link} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";

const Home = () => {
  let navigate = useNavigate();

  return (
    <>
      <Container maxW="container.xl">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/">
            <img src={require("./WConnect.png")} alt="logo" height="184" width="190" />
          </Link>
          <div style={{ display: 'flex', gap: 40, justifyContent: 'flex-end', marginRight: 20 }}>
            <Button backgroundColor="#120D31" color="white" height='48px' width='200px' onClick={() => { navigate("/register-mhs") }}>
              Mental Health Specialist?
            </Button>
            <Button backgroundColor="#120D31" color="white" height='48px' width='200px' onClick={() => { navigate("/register-mentor") }}>
              Industry Mentor?
            </Button>
          </div>
        </div>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={10}>
            <Heading as="h1" size="3xl" marginTop="20">
              Get connected to your personalized care team.
            </Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              Take control of your life by connecting with a career mentor and a mental health professional
            </Text>
            <Button backgroundColor="#120D31" color="white" height='48px' width='200px' onClick={() => { navigate("/register-mentee") }}>
              Mentee Sign Up
            </Button>
            <Text fontSize={"lg"}>Already a member?{" "}<Link href="/login" color="#B98EA7">Log in!</Link></Text>
          </Stack>
          <Flex>
            <Image
              alt={'feature image'}
              src={require("./Home.png")}
              height="710"
              width="710"
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
      <Container  style={{ backgroundColor: '#120D31', maxWidth: '100%' }}>
        <Footer/>
      </Container>
    </>
  );
}

export default Home;