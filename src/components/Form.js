import React from "react";
import {
  Box,
  Spacer,
  Stack,
  Text,
  Flex,
  Icon,
  Input,
  Button,
  useColorMode,
  color,
  FormControl,
} from "@chakra-ui/react";

import {
  FaFacebookF,
  FaRegCreditCard,
  FaUserPlus,
  FaCalendar,
  FaCalendarAlt,
  FaLock
} from "react-icons/fa";

export const Form = () => {
    const {colorMode,toggleColorMode}=useColorMode()
    const isDark=colorMode==="dark"
  return (
    <Stack width="500px" height="fit-content" bg="white" borderRadius="5px" color="black">
        <FormControl>
      <Box>
        <Text m="4" as="em" fontSize="30px">
          Payment Details
        </Text>
        <Flex mt="14px" direction="column" ml="14px" pl="10px">
          <Text fontSize="12px">Card Holder Name</Text>

          <Flex mt="13px" align="center" ml="8px" justify="center" pl="10px">
            <Icon as={FaUserPlus} fontSize="20px"></Icon>
            <Input
              border="none"
              borderRadius="0px"
              outline="none"
              focusBorderColor="none"
              borderBottom="1px solid black"
              placeholder="custom placeholder"
              _placeholder={{ opacity: 1, color: "gray.500" }}
            />
          </Flex>
        </Flex>
        <Flex mt="20px" direction="column" ml="14px" pl="10px">
          <Text fontSize="12px">Card Number</Text>

          <Flex mt="6px" align="center" ml="8px" justify="center" pl="10px">
            <Icon color="black" as={FaRegCreditCard} fontSize="20px"></Icon>
            <Input
              border="none"
              borderRadius="0px"
              outline="none"
              focusBorderColor="none"
              borderBottom="1px solid black"
              placeholder="custom placeholder"
              _placeholder={{ opacity: 1, color: "gray.500" }}
            />
          </Flex>
        </Flex>

        <Flex mt="20px">
          <Flex mt="20px" direction="column" ml="14px" pl="10px">
            <Text ml="10px" fontSize="12px">
              Expiry Month
            </Text>

            <Flex mt="6px" align="center" ml="8px" justify="center" pl="10px">
              <Icon as={FaCalendarAlt} fontSize="20px"></Icon>
              <Input
                border="none"
                borderRadius="0px"
                outline="none"
                focusBorderColor="none"
                borderBottom="1px solid black"
                placeholder="MM"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
            </Flex>
          </Flex>
          <Flex mt="20px" direction="column" ml="14px" pl="10px">
            <Text fontSize="12px">Expiry Year</Text>

            <Flex mt="6px" align="center" ml="8px" justify="center" pl="10px">
              <Icon as={FaCalendarAlt} fontSize="20px"></Icon>
              <Input
                border="none"
                borderRadius="0px"
                outline="none"
                focusBorderColor="none"
                borderBottom="1px solid black"
                placeholder="YEAR"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
            </Flex>
          </Flex>
          <Flex mt="20px" direction="column" ml="14px" pl="10px">
            <Text ml="10px" fontSize="12px">
              CVV
            </Text>

            <Flex mt="6px" align="center" ml="8px" justify="center" pl="10px">
              <Icon as={FaLock} fontSize="20px"></Icon>
              <Input
                border="none"
                borderRadius="0px"
                outline="none"
                focusBorderColor="none"
                borderBottom="1px solid black"
                placeholder="CVV"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
            </Flex>
          </Flex>
        </Flex>

        <Flex ml="30px" mt="30px">
          <Text fontSize="23px">Payment Amount: $300</Text>
        </Flex>
        <Button
          size="md"
          height="48px"
          width="160px"
        border="none"
       borderRadius="20px"
          bg="red.500"
          m="auto"
          mt="20px"
          display="block"
          fontSize="19px"
        
        >
          Pay Now
        </Button>
      </Box>
      </FormControl>
    </Stack>
  );
};
