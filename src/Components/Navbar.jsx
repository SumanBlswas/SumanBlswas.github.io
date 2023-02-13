import {
  Box,
  Button,
  Flex,
  // Heading,
  Text,
  useColorMode,
  // useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  // const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  // const secondaryTextColor = useColorModeValue("gray.600", "gray.400");
  const downloadResume = () => {
    window.open(
      "https://export-download.canva.com/v2sNY/DAFY-jv2sNY/67/0-46868316631.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20230212%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230212T163324Z&X-Amz-Expires=22179&X-Amz-Signature=f07e6a9de9ac7b1fa0f7781cb32a1e48c32a76a87ac855a8d2593782032b106d&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27sumanmanner%2540gmail.com.pdf&response-expires=Sun%2C%2012%20Feb%202023%2022%3A43%3A03%20GMT"
    );
  };

  const displayNavLinks = useBreakpointValue({
    base: "none",
    md: "block",
    lg: "block",
  });
  const displayNavLinks2 = useBreakpointValue({ base: "none", md: "block" });

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
        <Link to="/">
          <Text
            fontSize={"2xl"}
            fontFamily={"cursive"}
            fontWeight={"bold"}
            color={"white"}
          >
            My-Portfolio
          </Text>
        </Link>
        <NavLink
          className="nav-link home"
          to="#"
          smooth={true}
          display={displayNavLinks}
        >
          <Text
            fontSize={"2xl"}
            color={"white"}
            transition={"color 0.3s ease"}
            _hover={{ color: "grey" }}
            animation={"bounce 2s ease-in-out infinite"}
            display={displayNavLinks}
          >
            Home
          </Text>
        </NavLink>
        <NavLink
          className="nav-link about"
          to="#about"
          smooth={true}
          display={displayNavLinks}
        >
          <Text
            fontSize={"2xl"}
            color={"white"}
            transition={"color 0.3s ease"}
            _hover={{ color: "grey" }}
            animation={"bounce 2s ease-in-out infinite"}
            display={displayNavLinks}
          >
            About
          </Text>
        </NavLink>
        <NavLink
          className="nav-link skills"
          to="#skills"
          smooth={true}
          display={displayNavLinks}
        >
          <Text
            fontSize={"2xl"}
            color={"white"}
            transition={"color 0.3s ease"}
            _hover={{ color: "grey" }}
            animation={"bounce 2s ease-in-out infinite"}
            display={displayNavLinks}
          >
            Skills
          </Text>
        </NavLink>
        <NavLink
          className="nav-link projects"
          to="#projects"
          smooth={true}
          display={displayNavLinks}
        >
          <Text
            fontSize={"2xl"}
            color={"white"}
            transition={"color 0.3s ease"}
            _hover={{ color: "grey" }}
            animation={"bounce 2s ease-in-out infinite"}
            display={displayNavLinks}
          >
            Projects
          </Text>
        </NavLink>
        <NavLink
          className="nav-link contact"
          to="#contact"
          smooth={true}
          display={displayNavLinks}
        >
          <Text
            fontSize={"2xl"}
            color={"white"}
            transition={"color 0.3s ease"}
            _hover={{ color: "grey" }}
            animation={"bounce 2s ease-in-out infinite"}
            display={displayNavLinks}
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
          id="resume-button-1"
          bg={"#C471FF"}
          color={"#fff"}
          _hover={{ bg: "#FF9A9E", color: "#000" }}
          onClick={downloadResume}
          display={displayNavLinks2}
        >
          <Flex justify={"space-between"} gap={2} align={"center"}>
            <FiDownload />
            Resume
          </Flex>
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
