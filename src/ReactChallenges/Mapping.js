import { ListItem, UnorderedList, Stack } from '@chakra-ui/react';
import react from 'react';

function Mapping({}) {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  return (
    <Stack m = "10px">
      <UnorderedList>
        {animals.map(animal => {
          return <ListItem>{animal}</ListItem>;
        })}
      </UnorderedList>
    </Stack>
  );
}

export default Mapping;
