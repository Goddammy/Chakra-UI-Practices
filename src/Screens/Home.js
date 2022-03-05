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
    <VStack spacing="0">
      <VStack
        color="white"
        fontFamily="times-new-roman"
        w="100%"
        bg="blue.600"
        p="16px"
      >
        <Text fontSize="80px" pt="20px">
          BABAJIDE KEHINDE
        </Text>
        <Text fontSize={'36px'} fontStyle={'italic'} pb="20px">
          SOFTWARE ENGINEER
        </Text>
      </VStack>
      <HStack w="full">
        <Stack w="34%" bg="gray.50" pt="50px" pr="1em">
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
            <VStack alignItems={'end'}>
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
        <VStack w="66%" alignSelf="start" alignItems="start">
          <Heading fontSize={'2xl'} mt="15px" ml="30px" pt="35px">
            CAREER OBJECTIVE
          </Heading>
          <Text pl="30px">
            I am an insightful and diligent IT Professional with with less than
            a year experience as a software developer, I am very comfortable
            using React.js, Chakra UI and Bootstrap styling. I have a strong
            desire to make a positive impact in any organization. I have
            excellent reputation for learning very fast, willing to learn,
            unlearn and relearn while delivering effective services.
          </Text>
          <VStack pl="28px" alignItems="start">
            <Heading fontSize={'2xl'} mt="15px" pt="35px">
              WORK EXPERIENCE
            </Heading>

            <VStack pl="28px" alignItems="start" >
            <Text fontWeight = 'bold'>Frontend Developer</Text>
            <Text>ITSkillscenter</Text>
            <Text>Ocotber, 2021 - Present</Text>
            <UnorderedList pl = "30px">
              <ListItem>
                Assistedinconverting anoldwebsite (https://eespace.com.ng)tonew
                (https://staging.eespace.com.ng
              </ListItem>
              <ListItem>
                Building both desktop and mobile friendly interface web apps
              </ListItem>
              <ListItem>
                Review codes and ensure quality ofdesigns and implementations,
                and advocating clarity within the team
              </ListItem>
              <ListItem>Consumption of API’s</ListItem>            
            </UnorderedList>
            </VStack>

            <VStack alignItems="start" pt= "20px" pl = "25px">
            <Text fontWeight = 'bold' >Frontend Developer</Text>
            <Text>ITSkillscenter</Text>
            <Text>Ocotber, 2021 - Present</Text>
            <UnorderedList pl = "30px">
              <ListItem>
                Assistedinconverting anoldwebsite (https://eespace.com.ng)tonew
                (https://staging.eespace.com.ng
              </ListItem>
              <ListItem>
                Building both desktop and mobile friendly interface web apps
              </ListItem>
              <ListItem>
                Review codes and ensure quality ofdesigns and implementations,
                and advocating clarity within the team
              </ListItem>
              <ListItem>Consumption of API’s</ListItem>            
            </UnorderedList>
            </VStack>
            
            <VStack alignItems="start" pt= "20px" pl = "25px">
            <Text fontWeight = 'bold' >Frontend Developer</Text>
            <Text>ITSkillscenter</Text>
            <Text>Ocotber, 2021 - Present</Text>
            <UnorderedList pl = "30px">
              <ListItem>
                Assistedinconverting anoldwebsite (https://eespace.com.ng)tonew
                (https://staging.eespace.com.ng
              </ListItem>
              <ListItem>
                Building both desktop and mobile friendly interface web apps
              </ListItem>
              <ListItem>
                Review codes and ensure quality ofdesigns and implementations,
                and advocating clarity within the team
              </ListItem>
              <ListItem>Consumption of API’s</ListItem>            
            </UnorderedList>
            </VStack>
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
}

export default Home;
