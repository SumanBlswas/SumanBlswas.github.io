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
import GitStat from "../Components/GitStat/GitStat";

const Home = () => {
  const bgColor = useColorModeValue("#461783", "rgb(234, 246, 249)");
  const secondaryTextColor = useColorModeValue("#fff", "black");
  const downloadResume = () => {
    window.open(
      // "https://export-download.canva.com/v2sNY/DAFY-jv2sNY/67/0-46868316631.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20230212%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230212T163324Z&X-Amz-Expires=22179&X-Amz-Signature=f07e6a9de9ac7b1fa0f7781cb32a1e48c32a76a87ac855a8d2593782032b106d&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27sumanmanner%2540gmail.com.pdf&response-expires=Sun%2C%2012%20Feb%202023%2022%3A43%3A03%20GMT"
      "https://export-download.canva.com/fFXkM/DAFaaJfFXkM/3/0-46876027084.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20230212%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230212T014521Z&X-Amz-Expires=90260&X-Amz-Signature=5ce3ce8644d2d3caefb9ca20737ce07f8b644132e732217fc15c6f63abf04014&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Copy%2520of%2520sumanmanner%2540gmail.com.pdf&response-expires=Mon%2C%2013%20Feb%202023%2002%3A49%3A41%20GMT"
    );
  };

  const pt = useBreakpointValue({ base: "20%", md: "10%" });

  return (
    <Box bg={bgColor} color={secondaryTextColor} pt={pt}>
      <Box id="home">
        <Center>
          <Flex justify={"space-around"} align={"center"} wrap={"wrap"}>
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
                <Button
                  bg={"#C471FF"}
                  color={"#fff"}
                  _hover={{ bg: "#FF9A9E", color: "#000" }}
                  onClick={downloadResume}
                >
                  <Flex justify={"space-between"} gap={2} align={"center"}>
                    <FiDownload />
                    Resume
                  </Flex>
                </Button>
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
      <Contact />
      <Box display={"none"}>
        <GitStat />
      </Box>
      <Divider />
      <Footer />
    </Box>
  );
};

export default Home;
