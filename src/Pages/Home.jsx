import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import DummyPic from "../Image/DummyPic.png";
import Footer from "../Components/Footer";
import { FiDownload, FiGithub } from "react-icons/fi";
import { NavLink } from "react-router-dom";
// import GitStat from "../Components/GitStat/GitStat";
// import { Link } from "react-router-dom";
// import Resume from "../Image/Suman_Biswas_Resume.pdf";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";
import GitStateHome from "../Components/GitStat/GitStateHome";

const Home = () => {
  const bgColor = useColorModeValue("#461783", "rgb(234, 246, 249)");
  const secondaryTextColor = useColorModeValue("#fff", "black");
  // const downloadResume = () => {
  //   window.open(
  //     "https://drive.google.com/file/d/1tlNTe3gqnm_9NpEzocTr3CB_iE3dIbxw/view?usp=sharing",
  //     "_blank"
  //   );
  // };

  const pt = useBreakpointValue({ base: "28%", md: "10%" });

  return (
    <Box bg={bgColor} color={secondaryTextColor} pt={pt}>
      <Box id="home">
        <Center>
          <Flex justify={"space-around"} align={"center"} wrap={"wrap"} gap={4}>
            <Box textAlign={"left"} fontFamily={"cursive"}>
              <Heading id="user-detail-name">Hi, I'm Suman Biswas</Heading>
              <Text fontSize={"2xl"}>Full Stack Developer</Text>
              <br />
              <Text id="user-detail-intro" as="span">
                A multi-skilled developer equipped with expertise in both
                front-end & <br /> back-end technologies, delivering seamless
                and user-friendly web experiences.
              </Text>
              <br />
              <br />
              <Flex gap={4} wrap={"wrap"}>
                <a
                  id="resume-link-2"
                  href="https://drive.google.com/u/0/uc?id=1tlNTe3gqnm_9NpEzocTr3CB_iE3dIbxw&export=download"
                  onClick={() => {
                    window.open(
                      `https://drive.google.com/file/d/1tlNTe3gqnm_9NpEzocTr3CB_iE3dIbxw/view?usp=sharing`
                    );
                  }}
                >
                  <Button
                    bg={"#C471FF"}
                    color={"#fff"}
                    _hover={{ bg: "#FF9A9E", color: "#000" }}
                    id="resume-button-2"
                  >
                    <Flex justify={"space-between"} gap={2} align={"center"}>
                      <FiDownload />
                      Resume
                    </Flex>
                  </Button>
                </a>
                <NavLink to="/git-stat">
                  <Button
                    bg={"#C471FF"}
                    color={"#fff"}
                    _hover={{ bg: "#FF9A9E", color: "#000" }}
                  >
                    <Flex justify={"space-between"} gap={2} align={"center"}>
                      <FiGithub />
                      GitStat
                    </Flex>
                  </Button>
                </NavLink>
              </Flex>
            </Box>
            <Box
              w={"35%"}
              h={"35%"}
              bg={"linear-gradient(to top, red, #f26c6c)"}
              rounded="full"
              overflow="hidden"
            >
              <Image
                className="home-img"
                src={DummyPic}
                width={"100%"}
                height={"100%"}
                objectFit="cover"
                overflow="hidden"
              />
            </Box>
          </Flex>
        </Center>
      </Box>
      <About />
      <Skills />
      <Projects />
      <GitStateHome />
      <Contact />
      <Divider />
      <Box
        position={"fixed"}
        bottom={"10%"}
        right={"2%"}
        cursor={"pointer"}
        fontSize={"42px"}
        as={HashLink}
        to="#"
        smooth={true}
        zIndex={1}
      >
        <BsFillArrowUpSquareFill />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
