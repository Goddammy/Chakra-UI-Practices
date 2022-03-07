import { Text, VStack } from "@chakra-ui/react"
import react from "react"


function HelloWorld(){
    return(
        <VStack
        color="white"
        fontFamily="times-new-roman"
        w="500px"
        h="500px"
        bg="yellow.600"
        // p="16px"
        // mb="0"
        >
          <VStack>
            <Text mt ="250px">Hello, World!</Text>
      </VStack>
        </VStack>
    )
}

export default HelloWorld