import { Button, Stack } from '@chakra-ui/react';
import react, { useState } from 'react';

function CaptureUserClicks() {
  const handleClick = () => {
    return alert('You just Clicked me!');
  };

  return (
    <Stack direction="row" align="center" p="2%">
      <Button colorScheme="teal" variant="solid" onClick={handleClick}>
        Button
      </Button>
    </Stack>
  );
}

export default CaptureUserClicks;
