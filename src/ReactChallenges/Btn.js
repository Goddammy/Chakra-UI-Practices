import { Stack, Button } from "@chakra-ui/react"
import react from "react"


function Btn({onclick, classname}){

    return(
        <Stack direction="row" align="center" p="2%">
        <Button colorScheme="teal" variant="solid" onClick={onclick} className={classname}>
            Button
        </Button>
      </Stack>
    )
}

export default Btn