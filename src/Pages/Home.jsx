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
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";
import GitStateHome from "../Components/GitStat/GitStateHome";
import DummyMe from "../Image/DummyMe.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const bgColor = useColorModeValue("#461783", "rgb(234, 246, 249)");
  const secondaryTextColor = useColorModeValue("#fff", "black");

  const pt = useBreakpointValue({ base: "28%", md: "10%" });
  const imageSrc = useBreakpointValue({
    base: DummyMe,
    md: DummyPic,
  });
  const rounded = useBreakpointValue({
    base: "20px",
    md: "full",
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [gitStateRef, gitStateInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const sectionVariants3 = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const sectionVariants4 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        duration: 2,
      },
    },
  };

  const sectionVariants5 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        duration: 1,
      },
    },
  };

  const shouldAnimate = useBreakpointValue({
    base: sectionVariants5,
    md: sectionVariants3,
  });

  return (
    <Box bg={bgColor} color={secondaryTextColor} pt={pt}>
      <Box id="home">
        <Center pl={5} pr={5}>
          <Flex justify={"space-around"} align={"center"} wrap={"wrap"} gap={4}>
            <Box textAlign={"left"} fontFamily="'Josefin Sans', sans-serif">
              <Heading id="user-detail-name">Hi, I'm Suman Biswas</Heading>
              <Text fontSize={"2xl"}>Full Stack Developer</Text>
              <br />
              <Text id="user-detail-intro" as="span" fontSize={"lg"}>
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
              rounded={rounded}
              overflow="hidden"
              mt={{ base: "7%", md: "0" }}
            >
              <Image
                className="home-img"
                src={imageSrc}
                width={"100%"}
                height={"100%"}
                objectFit="cover"
                overflow="hidden"
              />
            </Box>
          </Flex>
        </Center>
      </Box>
      <Box objectFit={"contain"} overflow={"hidden"}>
        <motion.div
          ref={aboutRef}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ delay: 0.2 }}
        >
          <About />
        </motion.div>
        <motion.div
          ref={skillsRef}
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
          variants={shouldAnimate}
          transition={{ delay: 0.2 }}
        >
          <Skills />
        </motion.div>
        <motion.div
          ref={projectsRef}
          initial="hidden"
          animate={projectsInView ? "visible" : "hidden"}
          variants={shouldAnimate}
          transition={{ delay: 0.2 }}
        >
          <Projects />
        </motion.div>
        <motion.div
          ref={gitStateRef}
          initial="hidden"
          animate={gitStateInView ? "visible" : "hidden"}
          variants={sectionVariants4}
          transition={{ delay: 0.2 }}
        >
          <GitStateHome />
        </motion.div>
        <motion.div
          ref={contactRef}
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ delay: 0.2 }}
        >
          <Contact />
        </motion.div>
      </Box>
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
