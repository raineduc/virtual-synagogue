import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure, Icon,
  chakra
} from '@chakra-ui/react';
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaUserAlt } from 'react-icons/fa';
import { NavigationLink } from '../navigationLink/NavigationLink';
import { Path } from '../../core/router/paths';

export const PageHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="#1565c0"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Virtual Synagogue
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <NavigationLink to={Path.MAIN} text="Main" />
        <NavigationLink to={Path.LIBRARY} text="Library" />
        <NavigationLink to={Path.EVENT} text="Events" />
      </Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          variant="outline"
          _hover={{ bg: "blue.700"}}
        >
          <Icon as={FaUserAlt} mr="7px"/>
          <chakra.span fontSize="18px">Fakhri</chakra.span>
        </Button>
      </Box>
    </Flex>
  );
};