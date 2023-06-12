import React from "react";
import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ImGithub } from "react-icons/im";
import { SiFirefoxbrowser } from "react-icons/si";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

const ProjectItem = ({
  ProjectImage,
  title,
  description,
  handleGithubProject,
  handleProject,
  tech,
  heading,
}) => {
  const bgColor = useColorModeValue("#461783", "rgb(234, 246, 249)");
  const color2 = useColorModeValue("#fff", "#461783");
  const color2S = useColorModeValue("#000", "#fff");

  const screen = useBreakpointValue({ base: 3, md: 6, lg: tech?.length });

  return (
    <Flex
      p={6}
      bg={bgColor}
      color={!color2S}
      boxShadow={"2xl"}
      rounded={"lg"}
      zIndex={1}
      role={"group"}
      position="relative"
      className="project-card"
      pt={1}
      pb={5}
      flexWrap={"wrap"}
      gap={7}
    >
      <Box
        rounded={"lg"}
        pos={"relative"}
        w={"full"}
        _after={{
          transition: "all .3s ease",
          content: '""',
          w: { base: "282px", md: "full" },
          h: { base: 230, md: "full" },
          pos: "absolute",
          top: 5,
          left: 0,
          backgroundImage: `url(${IMAGE})`,
          filter: "blur(15px)",
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: "blur(20px)",
          },
        }}
      >
        <Carousel
          showArrows={true}
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showThumbs={false}
        >
          {ProjectImage &&
            ProjectImage.map((el) => (
              <Image
                key={el}
                rounded={"lg"}
                objectFit={"cover"}
                src={el}
                height={{ base: 230, md: "350px" }}
                width={{ base: 282, md: "100%" }}
              />
            ))}
        </Carousel>
      </Box>
      <Stack spacing={4} ml={4} textAlign={"left"}>
        <Heading
          fontSize={"2xl"}
          className="project-title"
          fontFamily="'Josefin Slab', serif"
        >
          {heading}
        </Heading>
        <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
          {title}
        </Text>
        <Text className="project-description">{description}</Text>
        <Flex
          className="project-tech-stack"
          justify={"start"}
          gap={"5px"}
          align={"center"}
        >
          {tech &&
            tech.map((el, index) =>
              screen && index < screen ? (
                <Text
                  key={index}
                  p="3px"
                  bg={color2}
                  color={color2S}
                  borderRadius="5px"
                  fontFamily="'Josefin Slab', serif"
                >
                  {el}
                </Text>
              ) : null
            )}
        </Flex>
        <Stack direction={"row"} spacing={2}>
          <Button
            onClick={handleGithubProject}
            colorScheme={"green"}
            leftIcon={<ImGithub />}
            size="sm"
            className="project-github-link"
          >
            GitHub
          </Button>
          <Button
            onClick={handleProject}
            colorScheme={"red"}
            leftIcon={<SiFirefoxbrowser />}
            size="sm"
            className="project-deployed-link"
          >
            Live Demo
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default ProjectItem;
