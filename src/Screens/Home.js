import {
  Center,
  Heading,
  HStack,
  Text,
  VStack,
  Spacer,
  Stack,
  Icon,
  Flex,
  Box,
  Link,
  UnorderedList,
  List,
  ListItem,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';
import { FaPhone } from 'react-icons/fa';
import { IconName, ImGithub, ImLocation, ImTwitter } from 'react-icons/im';

function Home() {
  return (
    <VStack spacing="0" mx="20%" mb="50px">
      <VStack
        color="white"
        fontFamily="times-new-roman"
        w="100%"
        bg="blue.600"
        p="16px"
        mb="0"
      >
        <Text fontSize="60px" pt="15px">
          BABAJIDE KEHINDE
        </Text>
        <Text fontSize={'24px'} fontStyle={'italic'} pb="20px">
          SOFTWARE ENGINEER
        </Text>
      </VStack>
      <Stack w="full" direction="row">
        <Stack w="32%" bg="gray.50" pt="20px" pr="1em">
          {/*  */}
          <VStack alignItems={'end'}>
            <Heading fontSize={'2xl'}>CONTACT</Heading>
            <VStack alignItems={'end'}>
              <Flex alignItems={'center'}>
                <Text pb="4px" mr="5px">
                  goddammy@gmail.com{' '}
                </Text>{' '}
                <Box>
                  <HiMail color="#CBD5E0" />
                </Box>
              </Flex>
              <Flex alignItems={'center'}>
                <Text pb="4px" mr="5px">
                  08131221848{' '}
                </Text>{' '}
                <Box>
                  <FaPhone color="#CBD5E0" />
                </Box>
              </Flex>
              <Flex alignItems={'center'}>
                <Text pb="4px" mr="5px">
                  Ikorodu, Lagos
                </Text>{' '}
                <Box>
                  <ImLocation color="#CBD5E0" />
                </Box>
              </Flex>
              <Flex alignItems={'center'}>
                <Text pb="4px" mr="5px">
                  <Link>Twitter</Link>
                </Text>{' '}
                <Box>
                  <ImTwitter color="#CBD5E0" />
                </Box>
              </Flex>
              <Flex alignItems={'center'}>
                <Text pb="4px" mr="5px">
                  <Link>Github</Link>{' '}
                </Text>{' '}
                <Box>
                  <ImGithub color="#CBD5E0" />
                </Box>
              </Flex>
            </VStack>
          </VStack>
          <VStack alignItems={'end'}>
            <Heading fontSize={'2xl'} mt="30px">
              EDUCATION
            </Heading>
            <VStack alignItems={'end'}>
              <Text pb="4px">Bachelor of Science</Text>
              <Text pb="4px">Computer Science</Text>
              <Text pb="4px">Tai-Solarin University of Education</Text>
              <Text pb="4px">Ijebu-Ode, Oggun State</Text>
              <Text pb="4px">2010-2015</Text>
            </VStack>
          </VStack>
          <VStack alignItems={'end'}>
            <Heading fontSize={'2xl'} mt="30px">
              SKILLS
            </Heading>
            <VStack alignItems={'end'}>
              <Text pb="4px">React Js</Text>
              <Text pb="4px">Next Js</Text>
              <Text pb="4px">Chakra UI</Text>
              <Text pb="4px">Laravel</Text>
              <Text pb="4px">Bootstrap</Text>
              <Text pb="4px">MySQL</Text>
              <Text pb="4px">Project Management</Text>
            </VStack>
          </VStack>
          <VStack alignItems={'end'}>
            <Heading fontSize={'2xl'} mt="30px">
              CERTIFICATES
            </Heading>
            <VStack alignItems={'end'} textAlign="end">
              <Text fontWeight={'bold'} mt="20px">
                FREECODECAMP
              </Text>
              <Text pb="4px">Responsive Web Design</Text>
              <Text pb="4px">Javascript Algorithm and Data Structure</Text>
              <Text fontWeight={'bold'} mt="20px">
                COURSERA
              </Text>
              <Text pb="4px">Project Management</Text>
            </VStack>
          </VStack>
        </Stack>
        <VStack w="68%" alignSelf="start" alignItems="start">
          <Heading fontSize={'2xl'} ml="20px" pt="20px">
            CAREER OBJECTIVE
          </Heading>
          <Text pl="20px">
            I am a dedicated Software Engineer and Project Manager with about a
            year coding and project management experience. I am proficient in
            React, while using strict CSS, Bootstrap and Chakra UI to style. I
            am an ardent tech enthusiast; consequently, I am always willing to
            learn new technologies in my field and, maybe, outside of it.
          </Text>
          <VStack pl="20px" alignItems="start">
            <Heading fontSize={'2xl'} mt="15px" pt="35px">
              WORK EXPERIENCE
            </Heading>

            <VStack pl="28px" alignItems="start">
              <Text fontWeight="bold">Frontend Developer</Text>
              <Text>ITSkillscenter</Text>
              <Text>Ifako-Agege, Lagos</Text>
              <Text>Ocotber, 2021 - Present</Text>
              <UnorderedList pl="30px">
                <ListItem>
                  Assisted in converting an old website (https://eespace.com.ng)
                  to new (https://staging.eespace.com.ng)
                </ListItem>
                <ListItem>
                  Building both desktop and mobile friendly web apps
                </ListItem>
                <ListItem>
                  Review codes and ensure quality of designs and
                  implementations, and advocating clarity within the team
                </ListItem>
                <ListItem>Consumption of API’s</ListItem>
              </UnorderedList>
            </VStack>

            <VStack pl="28px" alignItems="start">
              <Text fontWeight="bold">Junior Project Manager</Text>
              <Text>ITSkillscenter</Text>
              <Text>Ifako-Agege, Lagos</Text>
              <Text>Ocotber, 2021 - Present</Text>
              <UnorderedList pl="30px">
                <ListItem>
                  Assisted in managing the Livevend website from start to finish
                </ListItem>
                <ListItem>
                  Assisted in managing the Fricasa website from start to finish
                </ListItem>
              </UnorderedList>
            </VStack>

            <VStack alignItems="start" pt="20px" pl="25px">
              <Text fontWeight="bold">Regional Sales Manager</Text>
              <Text>His Divine Glory Enterprises</Text>
              <Text>Ikorodu, Lagos</Text>
              <Text>October, 2015 - September, 2021</Text>
              <UnorderedList pl="30px">
                <ListItem>
                  Helped in expanding sales of cement to Imota, Ikorodu; an entirely new region.
                </ListItem>
                <ListItem>
                  Drove sales to 200% in my first six months.
                </ListItem>
              </UnorderedList>
            </VStack>

            <VStack alignItems="start" pt="20px" pl="25px">
              <Text fontWeight="bold">Junior IT Support</Text>
              <Text>Jaminem Concepts</Text>
              <Text>Ijebu-Ode, Ogun State</Text>
              <Text>June 2012 - December 2013</Text>
              <UnorderedList pl="30px">
                <ListItem>Network, software and hardware maintenance</ListItem>
                <ListItem>Network troubleshooting</ListItem>
              </UnorderedList>
            </VStack>
          </VStack>
        </VStack>
      </Stack>
    </VStack>
  );
}

export default Home;
