import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import "../Components/css/Skills.css";
import { skills } from "../Redux/Skills.database";

const Skills = () => {
  return (
    <Box id="skills" m={"5%"} mt={0} mb={"0"}>
      <Heading fontFamily={"'Sono', sans-serif"} p="75px" pb="0">
        Skills
      </Heading>
      <Center mt={8} fontFamily={"'Fredoka One', cursive"}>
        {skills.img.map((el, i) => (
          <Flex className="skills-card" key={i} justify={"center"} placeItems={"center"} >
            <Image className="skills-card-img" src={el} />
            <Text className="skills-card-name"></Text>
          </Flex>
        ))}
      </Center>
    </Box>
  );
};

export default Skills;
