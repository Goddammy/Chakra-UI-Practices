import {
  Box,
  HStack,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
} from '@chakra-ui/react';
import react from 'react';

function AnimalList({ mamals }) {
  return (
    <Table
      variant="simple"
      border={'1px solid gray'}
      size="xm"
      mt={'20px'}
      mx="20%"
      w="10%"
    >
      <Tbody>
        {mamals.map(mamal => (
          <Tr>
            <Td>
              <HStack>
                <>{mamal.avater}</>
                <>{mamal.name}</>
              </HStack>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default AnimalList;
