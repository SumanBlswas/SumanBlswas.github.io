import {
  Box,
  Button,
  Flex,
  // Heading,
  Text,
  useColorMode,
  // useColorModeValue,
} from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
import { HashLink as NavLink } from "react-router-hash-link";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  // const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  // const secondaryTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box
      id="nav-menu"
      position={"fixed"}
      width={"100%"}
      bg={"linear-gradient(to right, #461783, #461783)"}
      p={"4"}
      zIndex={"2"}
    >
      <Flex justify={"space-between"} wrap={"wrap"}>
        <Text
          fontSize={"2xl"}
          fontFamily={"cursive"}
          fontWeight={"bold"}
          color={"white"}
        >
          My-Portfolio
        </Text>
        <NavLink className="nav-link home" to="#" smooth={true}>
          <Text
            fontSize={"2xl"}
            color={"white"}
            transition={"color 0.3s ease"}
            _hover={{ color: "grey" }}
            animation={"bounce 2s ease-in-out infinite"}
          >
            Home
          </Text>
        </NavLink>
        <NavLink className="nav-link about" to="#about" smooth={true}>
          <Text
            fontSize={"2xl"}
            color={"white"}
            transition={"color 0.3s ease"}
            _hover={{ color: "grey" }}
            animation={"bounce 2s ease-in-out infinite"}
          >
            About
          </Text>
        </NavLink>
        <NavLink className="nav-link skills" to="#skills" smooth={true}>
          <Text
            fontSize={"2xl"}
            color={"white"}
            transition={"color 0.3s ease"}
            _hover={{ color: "grey" }}
            animation={"bounce 2s ease-in-out infinite"}
          >
            Skills
          </Text>
        </NavLink>
        <NavLink className="nav-link projects" to="#projects" smooth={true}>
          <Text
            fontSize={"2xl"}
            color={"white"}
            transition={"color 0.3s ease"}
            _hover={{ color: "grey" }}
            animation={"bounce 2s ease-in-out infinite"}
          >
            Projects
          </Text>
        </NavLink>
        <NavLink className="nav-link contact" to="#contact" smooth={true}>
          <Text
            fontSize={"2xl"}
            color={"white"}
            transition={"color 0.3s ease"}
            _hover={{ color: "grey" }}
            animation={"bounce 2s ease-in-out infinite"}
          >
            Contact
          </Text>
        </NavLink>
        <Button onClick={toggleColorMode}>
          <Flex justify={"space-between"} gap={2} align={"center"}>
            <MdDarkMode />
            Neon Mode
          </Flex>
        </Button>
        <Button
          className="nav-link resume"
          bg={"#C471FF"}
          color={"#fff"}
          _hover={{ bg: "#FF9A9E", color: "#000" }}
        >
          <Flex
            id="resume-button-1"
            justify={"space-between"}
            gap={2}
            align={"center"}
          >
            <FiDownload />
            Resume
          </Flex>
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
