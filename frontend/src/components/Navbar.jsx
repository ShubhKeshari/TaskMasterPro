import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Button,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Links = [
  { name: "Dashboard", to: "/" },
  { name: "Projects", to: "/projects" },
  { name: "Tasks", to: "/tasks" },
  { name: "Team", to: "/team" },
  { name: "Chat", to: "/chat" },
  { name: "Calendar", to: "/calendar" },
];

const CustomNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    activeClassName="active"
    style={{
      textDecoration: "none",
      color: "black",
      padding: "8px 12px",
      borderRadius: "5px",
    }}
  >
    {children}
  </NavLink>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, logout } = useAuth();

  return (
    <Box
      bg={useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(0, 0, 0, 0.8)")}
      px={4}
      py={2}
      color="black"
      borderBottomWidth="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      pos="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10}
      backdropFilter="blur(4px)"
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        maxW="7xl"
        mx="auto"
      >
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          display={{ base: "flex", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={4} alignItems={"center"}>
          <Box fontWeight="bold">TaskMasterPro</Box>
        </HStack>
        <Flex
          alignItems={"center"}
          flex={1}
          justifyContent={{ base: "flex-end", md: "center" }}
          display={{ base: "none", md: "flex" }}
          spacing={4}
        >
          {Links.map((link) => (
            <CustomNavLink key={link.name} to={link.to}>
              {link.name}
            </CustomNavLink>
          ))}
        </Flex>
        <Flex alignItems={"center"}>
          {user &&
            (user.role === "admin" || user.role === "project_manager") && (
              <>
                <Button
                  as={NavLink}
                  to="/new-project"
                  variant={"solid"}
                  colorScheme={"green"}
                  size={"sm"}
                  mr={4}
                  leftIcon={<AddIcon />}
                  display={{ base: "none", md: "flex" }}
                >
                  New Project
                </Button>
                <Button
                  as={NavLink}
                  to="/new-project"
                  variant={"solid"}
                  colorScheme={"green"}
                  size={"sm"}
                  display={{ base: "flex", md: "none" }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <AddIcon />
                </Button>
              </>
            )}
          {user ? (
            <Button
              onClick={logout}
              variant={"solid"}
              colorScheme={"green"}
              size={"sm"}
              _hover={{ bg: useColorModeValue("gray.400", "gray.600") }}
              ml={4}
            >
              Logout
            </Button>
          ) : (
            <Button
              as={NavLink}
              to="/login"
              variant={"solid"}
              colorScheme={"green"}
              size={"sm"}
              _hover={{ bg: useColorModeValue("gray.400", "gray.600") }}
              ml={4}
            >
              Login
            </Button>
          )}
        </Flex>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <CustomNavLink key={link.name} to={link.to}>
                {link.name}
              </CustomNavLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export {Navbar}
