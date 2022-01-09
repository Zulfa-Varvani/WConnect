import React, { useState, useEffect } from 'react'
import {
  Container,
  Center,
  List,
  Button,
  Input,
  Avatar,
  AvatarBadge,
  Heading,
  Image,
  Text
} from '@chakra-ui/react'
import { PlusSquareIcon, HamburgerIcon } from '@chakra-ui/icons'
import { addDoc, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { useAuth, db, logout } from '../config';
import { useNavigate } from 'react-router-dom';

const MentorDash = () => {
  const user = useAuth();
  const [team, setTeam] = useState({});
  let navigate = useNavigate();
  const userName = user?.displayName?.split(" ")[0];

  useEffect(() => {
    const createTeam = async () => {
      const userEmail = user.email;

      // get all teams
      const teamsDocs = (await getDocs(collection(db, 'teams')));
      const teams = [];
      teamsDocs.forEach((doc) => teams.push(doc.data()));

      // get existing team
      const t = teams.find(team => team.member1.email === userEmail || team.member2.email === userEmail || team.member3.email === userEmail);

      if (team) setTeam(t);
      else {
        // get all users
        const usersDocs = (await getDocs(collection(db, 'users')));
        const users = [];
        usersDocs.forEach((doc) => users.push({ ...doc.data(), id: doc.id }));

        // get current user
        const u = users.find(({ email }) => userEmail === email);

        if (u) {
          // filter all other user types
          const { type, interest } = u;

          const otherTypes = ['mentee', 'mentor', 'mhs'].filter(item => item !== type);

          const [users1, users2] = users.reduce((acc, curr) => {
            const [arr1, arr2] = acc;
            const { type: t, interest: i } = curr;

            if (t === otherTypes[0] && i === interest) arr1.push(curr);
            if (t === otherTypes[1] && i === interest) arr2.push(curr);

            return [arr1, arr2];
          }, [[], []]);

          // create team
          const createdTeam = {
            member1: u,
            member2: users1[0],
            member3: users2[0]
          };

          // for ui
          setTeam(createdTeam);

          //save team in db
          await addDoc(collection(db, "teams"), createdTeam);
          await deleteDoc(doc(db, 'users', createdTeam.member1.id));
          await deleteDoc(doc(db, 'users', createdTeam.member2.id));
          await deleteDoc(doc(db, 'users', createdTeam.member3.id));
        }
      }
    };

    if (user) createTeam();
  }, [user, team]);

  async function handleLogout() {
    try{
        await logout();
        navigate("/");
    } catch(err) {
        alert("error");
    }
  }

  return (
      <Container minWidth={1200} minHeight={700}>
        <Center minHeight={680}>
          <List minHeight={640} ml={2} mr={2} minWidth={40}>
            <Container mb={10} mt={40}>
              <Button variant="solid" size="sm" backgroundColor="#CEB7BB">
                My Care Team
              </Button>
            </Container>
            <Container mb={10}>
              <Button variant="solid" size="sm" backgroundColor="#CEB7BB">
                Sessions
              </Button>
            </Container>
            <Container>
              <Button variant="solid" size="sm" backgroundColor="#CEB7BB">
                Support
              </Button>
            </Container>
            <Container mt={195}>
              <Button
                variant="solid"
                size="sm"
                backgroundColor="#120D31"
                color="gray.100"
                colorScheme="gray"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Container>
          </List>
          <List minHeight={640} ml={2} mr={2} minWidth={950}>
            <Center>
              <List ml={1} mr={11} minWidth={750} minHeight={20}>
                <Input
                  placeholder="Search  e.g. appointment"
                  display="block"
                  mt={2}
                />
              </List>
              <List mr={1} minHeight={20}>
                <Avatar name="Jane Doe" showBorder>
                  <AvatarBadge
                    bg="green.500"
                    boxSize="1.25rem"
                    borderColor="white"
                  />
                  <AvatarBadge
                    bg="green.500"
                    boxSize="1.25rem"
                    borderColor="white"
                  />
                </Avatar>
              </List>
            </Center>
            <Container
              minWidth={910}
              border="solid grey"
              borderRadius={10}
              opacity={0.99}
              height={500}
            >
              <Container mt={3} mr={500}>
                <Heading>Welcome {userName}!</Heading>
              </Container>
              <Center height={340} pt={55}>
                <List
                  mr={2}
                  ml={2}
                  minWidth={400}
                  height={370}
                  borderRadius={10}
                  backgroundColor="#EDECEC"
                >
                  <Center>
                    <Image
                      src="https://media.istockphoto.com/photos/headshot-portrait-of-a-young-filipino-woman-picture-id1308405485?b=1&k=20&m=1308405485&s=170667a&w=0&h=RUya9FKVrTwV8R5LYpAzw1P95shIaPmQ3V6CKy2379I="
                      maxHeight={400}
                      maxWidth={300}
                      pt={5}
                      pl={5}
                      pr={5}
                      pb={5}
                    />
                  </Center>
                  <List>
                    <Container>
                      <Text fontWeight="bold" fontSize="lg" pl={55}>
                        {team.member2.name}
                      </Text>
                    </Container>
                    <Center pr={10} mt={2}>
                      <List>
                        <PlusSquareIcon />
                      </List>
                      <List minWidth={200} ml={2}>
                        <Text>Your {team.member2.type}</Text>
                      </List>
                    </Center>
                    <Center pr={10} mt={2}>
                      <List>
                        <HamburgerIcon />
                      </List>
                      <List minWidth={200} ml={2}>
                        <Text>Shared interest: {team.member2.interest}</Text>
                      </List>
                    </Center>
                    <Center>
                      <Button
                        variant="solid"
                        size="sm"
                        mt={3}
                        mb={3}
                        ml={1}
                        mr={5}
                        color="#120D31"
                        border="Solid #120D31"
                      >
                        Connect
                      </Button>
                      <Button
                        variant="solid"
                        size="sm"
                        ml={1}
                        mr={3}
                        mt={3}
                        mb={3}
                        color="#120D31"
                        border="Solid #120D31"
                      >
                        Book a Session
                      </Button>
                    </Center>
                  </List>
                </List>
                <List
                  mr={2}
                  ml={2}
                  minWidth={400}
                  height={370}
                  borderRadius={10}
                  backgroundColor="#EDECEC"
                >
                  <Center>
                    <Image
                      src="https://www.maynardleigh.com/media/image/women-in-leadership-blog-uk-1052.jpg"
                      maxHeight={400}
                      maxWidth={300}
                      pt={5}
                      pl={5}
                      pr={5}
                      pb={5}
                    />
                  </Center>
                  <List>
                    <Container>
                      <Text fontWeight="bold" fontSize="lg" pl={55}>
                      {team.member3.name}
                      </Text>
                    </Container>
                    <Center pr={10} mt={2}>
                      <List>
                        <PlusSquareIcon />
                      </List>
                      <List minWidth={200} ml={2}>
                        <Text>Your {team.member3.type}</Text>
                      </List>
                    </Center>
                    <Center pr={10} mt={2}>
                      <List>
                        <HamburgerIcon />
                      </List>
                      <List minWidth={200} ml={2}>
                        <Text>Shared interests: {team.member3.interest}</Text>
                      </List>
                    </Center>
                    <Center>
                      <Button
                        variant="solid"
                        size="sm"
                        mt={3}
                        mb={3}
                        ml={1}
                        mr={5}
                        color="#120D31"
                        border="Solid #120D31"
                      >
                        Connect
                      </Button>
                      <Button
                        variant="solid"
                        size="sm"
                        ml={1}
                        mr={3}
                        mt={3}
                        mb={3}
                        color="#120D31"
                        border="Solid #120D31"
                      >
                        Book a Session
                      </Button>
                    </Center>
                  </List>
                </List>
              </Center>
            </Container>
          </List>
        </Center>
      </Container>
  );
};

export default MentorDash;