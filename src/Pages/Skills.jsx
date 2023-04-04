import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import "../Components/css/Skills.css";
import { skills } from "../Redux/Skills.database";

const Skills = () => {
  return (
    <Box id="skills" m={"5%"} mt={0} mb={"0"}>
      <Heading fontFamily={"'Sono', sans-serif"} p="70px" pb="0">
        Skills
      </Heading>
      <Center mt={8} fontFamily={"'Fredoka One', cursive"}>
        {skills.map((el, id) => (
          <Box className="skills-card" key={id}>
            <Image className="skills-card-img" />
            <Text className="skills-card-name">{el}</Text>
          </Box>
        ))}
      </Center>
    </Box>
  );
};

export default Skills;
