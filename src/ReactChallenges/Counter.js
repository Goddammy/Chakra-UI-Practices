import { Button, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"


function Counter(){
 const [count, setCount]= useState(0)
 let time_s = count > 1 ? 'times':"time"

 const handleClick= ()=>{
    //console.log("Clicked")
    return setCount(count+1)
 }

    return (
        <Stack direction="row" align="center" p="2%">
      <Button colorScheme="teal" variant="solid" onClick={handleClick}>
        Button
      </Button>
            <Text>This button has been clicked: {count} {time_s}</Text>
    </Stack>
    )
}

export default Counter