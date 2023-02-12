import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import EliteStore from "./Projects/EliteStore";
import PyaraPizza from "./Projects/PyaraPizza";
import TravelHut from "./Projects/TravelHut";

const Projects = () => {
  return (
    <Box id="projects" mt={"5%"} zIndex={"-1"}>
      <Heading>Projects</Heading>
      <Center>
        <Flex justify={"space-between"} gap={4}>
          <TravelHut />
          <PyaraPizza />
          <EliteStore />
        </Flex>
      </Center>
    </Box>
  );
};

export default Projects;
