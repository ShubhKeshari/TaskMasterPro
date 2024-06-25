import React from "react";
import { Box, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      py={8}
      bg={useColorModeValue("gray.200", "gray.800")}
      color={useColorModeValue("gray.700", "gray.300")}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-around"
        align="center"
        maxW="container.xl"
        mx="auto"
        px={6}
      >
        <Box  mb={{ base: "8", md: "0" }} w={"50%"}>
          <Text fontSize={{ base: "lg", md: "xl" }} mb={4} fontWeight="bold" align={"center"}>
            About TaskMasterPro
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }}>
            TaskMasterPro is designed to streamline project management and
            enhance team collaboration. Our platform offers robust features such
            as real-time updates, secure file sharing, and customizable
            dashboards to boost productivity.
          </Text>
        </Box>
        <Box
          mb={{ base: "8", md: "0" }}
        >
          <Text fontSize={{ base: "lg", md: "xl" }} mb={4} fontWeight="bold">
            Quick Links
          </Text>
          <Flex direction="column" fontSize={{ base: "sm", md: "md" }}>
            <Link href="/privacy-policy" mx={2} _hover={{ color: "teal.500" }}>
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              mx={2}
              _hover={{ color: "teal.500" }}
            >
              Terms of Service
            </Link>
            <Link href="/contact-us" mx={2} _hover={{ color: "teal.500" }}>
              Contact Us
            </Link>
          </Flex>
        </Box>
      </Flex>

      <Box mt={8} textAlign="center">
        <Text fontSize={{ base: "sm", md: "md" }} color="gray.500">
          &copy; {new Date().getFullYear()} TaskMasterPro. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export { Footer };
