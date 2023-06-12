import { Box, Center, Grid, GridItem, Heading } from "@chakra-ui/react";
import Koovs from "./Projects/components/Koovs";
import LimeRoad from "./Projects/components/LimeRoad";
import PyaraPiizza from "./Projects/components/PyaraPizza";
import EliteStore from "./Projects/components/EliteStore";

const Projects = () => {
  return (
    <Box id="projects" m="8%" mt={0} mb={"0"}>
      <Heading fontFamily={"'Sono', sans-serif"} p="75px" pb="0">
        Projects
      </Heading>
      <Center mt={7}>
        <Grid
          gap={7}
          gridTemplateColumns={{
            base: "1fr",
            md: "repeat(1, 1fr)",
            lg: "repeat(1, 1fr)",
            xl: "repeat(2, 1fr)",
          }}
          fontFamily="'Josefin Sans', sans-serif"
        >
          <GridItem>
            <EliteStore />
          </GridItem>
          <GridItem>
            <PyaraPiizza />
          </GridItem>
          <GridItem>
            <Koovs />
          </GridItem>
          <GridItem>
            <LimeRoad />
          </GridItem>
        </Grid>
      </Center>
    </Box>
  );
};

export default Projects;
