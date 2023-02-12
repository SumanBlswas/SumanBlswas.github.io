import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import DummyPic from "../Image/DummyPic.png";
import Footer from "../Components/Footer";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  const bgColor = useColorModeValue("#461783", "rgb(234, 246, 249)");
  const secondaryTextColor = useColorModeValue("#fff", "black");

  return (
    <Box pt={"10%"} bg={bgColor} color={secondaryTextColor}>
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

              <Button
                id="resume-button-2"
                bg={"#C471FF"}
                color={"#fff"}
                _hover={{ bg: "#FF9A9E", color: "#000" }}
              >
                <Flex justify={"space-between"} gap={2} align={"center"}>
                  <FiDownload />
                  Resume
                </Flex>
              </Button>
            </Box>
            <Box
              w={"35%"}
              h={"35%"}
              bg={"linear-gradient(to top, red, #f26c6c)"}
              rounded="full"
              overflow="hidden"
            >
              <Image
                class="home-img"
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
      <Divider />
      <Footer />
    </Box>
  );
};

export default Home;
