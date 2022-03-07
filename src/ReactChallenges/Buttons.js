import { Stack } from '@chakra-ui/react';
import react from 'react';
import Button from './Btn';

function Buttons({classname}) {
    let classBtn = classname == undefined? 'button1': classBtn == 'button1'? 'button2': 'button3'
const handleClick = (anyBtn)=>{
    if (anyBtn === "button1"){
        return alert("You just clicked button 1")
    }else if(anyBtn === "button2"){
        return alert("You just clicked button 2")
    }else if(anyBtn === "button3"){
        return alert("You just clicked button3")
    }
}

  return (
    <Stack direction="row" align="center" p="2%">
      <Button classname={classBtn} onclick={()=>handleClick('button1')}/>
      <Button classname={classBtn} onclick={()=>handleClick('button2')}/>
      <Button classname={classBtn} onclick={()=>handleClick('button3')}/>
    </Stack>
  );
}

export default Buttons;
