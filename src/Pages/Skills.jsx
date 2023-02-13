import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import "../Components/css/Skills.css";

const Skills = () => {
  return (
    <Box id="skills" mt={"5%"}>
      <Heading className="skills-card" fontFamily={"'Sono', sans-serif"}>
        Skills
      </Heading>
      <Image className="skills-card-img" />
      <Center mt={8} fontFamily={"'Fredoka One', cursive"}>
        {/* <Flex justify={"space-evenly"} wrap={"wrap"}> */}
        <Box>
          <Text className="skills-card-name">HTML5</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">CSS3</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">JavaScriptt</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">TypeScript</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">React</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">Redux</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">React-Redux</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">Redux-Thunks</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">Heroku</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">Vercel</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">Netlify</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">ChakraUI</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">Bootstrap</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">NPM</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">GitHub</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">NextJS</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">Node.JS</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">MongoDB</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">Express.JS</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">React-Router</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">Hash-Link</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">Canva</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">Figma</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">Photoshop</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">Premier Pro</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">Babel</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">PostMan</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">Portfolio</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">Dribble</Text>
        </Box>
        <Box>
          <Text className="skills-card-name">Etc.</Text>
        </Box>
        {/* </Flex> */}
      </Center>
    </Box>
  );
};

export default Skills;
