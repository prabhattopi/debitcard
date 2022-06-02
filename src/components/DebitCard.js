import { Box, Spacer, Stack,Text,Flex, Icon } from '@chakra-ui/react'
import React from 'react'
import {FaFacebookF,FaRegCreditCard} from "react-icons/fa"

export const DebitCard = () => {
  return (
   <Stack  width="500px" height="300px" bgGradient='linear(to-r, green.200, pink.500,red.600)' borderRadius="5px" boxShadow='dark-lg'>
       <Box>
           <Flex p="2">
           <Spacer></Spacer>
           <Text  m="4" as='em' color="whiteAlpha.900" fontSize="30px">VISA</Text>
           </Flex>
           <Icon as={FaRegCreditCard} ml="5" fontSize="40px" color="black" />
           <Text color="black" ml="5" mt="5px" fontSize="26px" fontWeight="400">4565 4545 4545 4545</Text>
           <Flex ml="-20px" mt="40px" justify="space-around" fontSize="12px">
               <Text>Card Holder Name</Text>
               <Text >MM/YY</Text>
               <Text>CVV</Text>

           </Flex>
           <Flex  gap="20px" justify="space-around" fontSize="19px">
               <Text>Prabhat Singh</Text>
               <Text>09 / 24</Text>
               <Text>123</Text>

           </Flex>

         
       </Box>
   </Stack>
  )
}
