import React from "react";
import {Heading, Stack, Container, Grid, GridItem, Flex, Image, Text, Button, HStack, Link} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate();

    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src={require("./WConnect.png")} alt="logo" height="184" width="190"/>
          <div style={{ display: 'flex', gap: 40, justifyContent: 'flex-end' }}>
            <Button backgroundColor="#120D31" color="white" height='48px' width='200px' onClick={() => {navigate("/register-mhs")}}>
              Mental Health Specialist?
            </Button>
            <Button backgroundColor="#120D31" color="white" height='48px' width='200px' onClick={() => {navigate("/register-mentor")}}>
              Industry Mentor?
            </Button>
          </div>
        </div>
        <Container>
          <Grid templateColumns='repeat(2, 1fr)' gap={10}>
            <GridItem>
              <Stack spacing={40} marginLeft={100}>
                <Heading as="h1" size="3xl">
                  Get connected to your personalized care team.
                </Heading>
                <Text color={'gray.500'} fontSize={'lg'}>
                  Take control of your life by connecting with a career mentor and a mental health professional
                </Text>
                <Button backgroundColor="#120D31" color="white" height='48px' width='200px' onClick={() => {navigate("/register-mentee")}}>
                  Mentee Sign Up
                </Button>
                <Text fontSize={"lg"}>Already a member?{" "}<Link href="/login">Log in!</Link></Text>
              </Stack>
            </GridItem>
            <GridItem>
              <Flex>
                <Image
                  alt={'feature image'}
                  src={require("./Home.png")}
                  height="710"
                  width="710"
                />
              </Flex>              
            </GridItem>
          </Grid>
        </Container>
      </div>
    );
}

export default Home;