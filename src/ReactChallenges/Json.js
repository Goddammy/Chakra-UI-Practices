import { Box, Center, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import react from 'react';

function Json() {
  const JSons = [
    {
      id: '1',
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit",
    },
    {
      id: '2',
      setup: 'Why do programmers wear glasses?',
      punchline: 'Because they need to C#',
    },
  ];

  return (

    <>
    
    
    
    <HStack bg={'teal.50'} mt="20px" p="20px" mx="5%" borderRadius={'20px'}>
      {JSons.map(JSon => (
          <Box bg={'white'} p="20px" borderRadius={'20px'} boxShadow="inner" textAlign={"center"}>
            <Text fontSize={'32px'}>{JSon.setup}</Text>
            <Text>{JSon.punchline}</Text>
          </Box>  
      ))}
    </HStack>

    </>


  );
}

export default Json;
