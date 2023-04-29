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
// import Resume from "../Image/Suman_Biswas_Resume.pdf";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  // const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  // const secondaryTextColor = useColorModeValue("gray.600", "gray.400");
  // const downloadResume = () => {
  //   window.open(
  //     "https://drive.google.com/file/d/1tlNTe3gqnm_9NpEzocTr3CB_iE3dIbxw/view?usp=sharing",
  //     "_blank"
  //   );
  // };

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
          className="nav-link activity"
          to="#activity"
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
            GitStat
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

        {/* <Button
          className="nav-link resume"
          id="resume-button-1"
          pt={2}
          bg={"#C471FF"}
          color={"#fff"}
          _hover={{ bg: "#FF9A9E", color: "#000" }}
          onClick={downloadResume}
          as={"a"}
          href={Resume}
          download
          display={displayNavLinks2}
        >
          <Flex justify={"space-between"} gap={2} align={"center"}>
            <FiDownload />
            Resume
          </Flex>
        </Button> */}
        <a
          id="resume-link-1"
          className="nav-link resume"
          href="https://drive.google.com/u/0/uc?id=1tlNTe3gqnm_9NpEzocTr3CB_iE3dIbxw&export=download"
          onClick={() => {
            window.open(
              `https://drive.google.com/file/d/1tlNTe3gqnm_9NpEzocTr3CB_iE3dIbxw/view?usp=sharing`
            );
          }}
          display={displayNavLinks2}
        >
          <Button
            bg={"#C471FF"}
            color={"#fff"}
            _hover={{ bg: "#FF9A9E", color: "#000" }}
            id="resume-button-1"
          >
            <Flex justify={"space-between"} gap={2} align={"center"}>
              <FiDownload />
              Resume
            </Flex>
          </Button>
        </a>
      </Flex>
    </Box>
  );
};

export default Navbar;
