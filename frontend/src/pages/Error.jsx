import React from 'react';
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Flex h={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <Box>
        <VStack>
          <Heading fontFamily={'Futura Std'}>404</Heading>
          <Heading fontSize={'30px'} fontFamily={'Futura Std'}>UH OH! You are lost.</Heading>
          <Text textAlign={'center'} fontFamily={'Futura Std'}>The page you are looking for does not exist. How you got here is a mystery. But you can click on the button below to go back to the homepage.</Text>
          <NavLink to={'/'}>
            <Button colorScheme='gray'><ArrowBackIcon/> Go back to Homepage </Button>
          </NavLink>
        </VStack>
      </Box>
    </Flex>
  );
}

export {Error};