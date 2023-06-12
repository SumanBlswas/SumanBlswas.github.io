import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import Bogo from "./Projects/Bogo";
import EliteStore from "./Projects/EliteStore";
import PyaraPizza from "./Projects/PyaraPizza";
import TravelHut from "./Projects/TravelHut";
import Koovs from "./Projects/Koovs";
import LimeRoad from "./Projects/LimeRoad";

const Projects = () => {
  return (
    <Box id="projects" m="8%" mt={0} mb={"0"}>
      <Heading fontFamily={"'Sono', sans-serif"} p="75px" pb="0">Projects</Heading>
      <Center mt={3}>
        <Flex
          justify={{ base: "center", md: "space-around" }}
          alignItems="center"
          flexWrap="wrap"
          gap={5}
        >
          <TravelHut />
          <Bogo />
          <EliteStore />
          <PyaraPizza />
          <Koovs />
          <LimeRoad />
        </Flex>
      </Center>
    </Box>
  );
};

export default Projects;
