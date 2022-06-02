import logo from './logo.svg';
import './App.css';
import { Flex,IconButton,Stack, useColorMode } from '@chakra-ui/react';
import { DebitCard } from './components/DebitCard';
import { Form } from './components/Form';
import {FaSun,FaMoon,FaInstagram,FaGithub,FaLinkedin} from "react-icons/fa"
function App() {
  const {colorMode,toggleColorMode}=useColorMode()
  const isDark=colorMode==="dark"
  return (
    <>
    <IconButton mt="20px" ml={8} icon={isDark ? <FaSun/>:<FaMoon/>} isRound="true" onClick={toggleColorMode}></IconButton>
    <Stack mt="40px" display="flex" justify="center" alignItems="center"  minH="40vh" >
   <Flex gap="50px">
  
    <DebitCard/>
    <Form/>
   </Flex>
   </Stack>
   </>
  );
}

export default App;
