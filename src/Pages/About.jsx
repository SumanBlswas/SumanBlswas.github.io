import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import DummyMe from "../Image/DummyMe.png";
import pdf from "../Image/Suman_Biswas_Portfolio.pdf";

// const downloadResume = () => {
//   window.open(
//     "https://export-download.canva.com/v2sNY/DAFY-jv2sNY/67/0-46868316631.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20230212%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230212T163324Z&X-Amz-Expires=22179&X-Amz-Signature=f07e6a9de9ac7b1fa0f7781cb32a1e48c32a76a87ac855a8d2593782032b106d&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27sumanmanner%2540gmail.com.pdf&response-expires=Sun%2C%2012%20Feb%202023%2022%3A43%3A03%20GMT"
//   );
// };

const About = () => {
  return (
    <Box id="about" className="about section" mt={"7%"}>
      <Flex gap={4} justify={"center"} align={"center"}>
        <Heading
          as={"h1"}
          fontFamily={"'Sono', sans-serif"}
          textDecoration={"underline"}
        >
          About
        </Heading>
        <Heading fontFamily={"'Sono', sans-serif"} color={"tomato"}>
          Me
        </Heading>
      </Flex>
      <Center mt={"4%"}>
        <Flex justify={"space-around"} align={"center"}>
          <Flex w={"25%"} direction={"column"} gap="70px" align={"center"}>
            <Image w={"50%"} src={DummyMe} borderRadius={"2xl"} />
            <Image
              w={"80%"}
              src={"https://chetan-bhagat.github.io/Images/hero-devices.svg"}
            />
          </Flex>
          <Box>
            <Text
              fontFamily={"'Fredoka One', cursive"}
              fontSize={"2xl"}
              fontWeight={"bold"}
              textAlign={"left"}
              textDecoration="underline"
              mb={2}
              color="#ffa500"
            >
              MySelf
            </Text>
            <UnorderedList>
              <ListItem>
                <Text
                  fontFamily={"'Signika Negative', sans-serif"}
                  textAlign={"left"}
                >
                  Hello! My name is Suman Biswas. I have graduated in B.SC
                  Computer Science. <br /> Now a passionate developer, having
                  strong administrative and communication skills.
                </Text>
              </ListItem>
              <ListItem>
                <Text
                  fontFamily={"'Signika Negative', sans-serif"}
                  textAlign={"left"}
                >
                  I have completed the full stack Development(Full-Time) course
                  in <br /> Masai (Skilling platform) with immense 1200+ coding
                  and industry level projects.
                </Text>
              </ListItem>
            </UnorderedList>
            <Text
              fontFamily={"'Fredoka One', cursive"}
              fontSize={"2xl"}
              fontWeight={"bold"}
              textAlign={"left"}
              textDecoration="underline"
              mb={2}
              color="#ffa500"
              mt={3}
            >
              Professional Summary
            </Text>
            <Text
              fontFamily={"'Signika Negative', sans-serif"}
              textAlign={"left"}
              id="user-detail-intro"
            >
              With a strong foundation in software development & a commitment to{" "}
              <br /> delivering high-quality solutions, there is a desire to
              contribute <br /> technical skills and problem-solving abilities
              in a dynamic role. <br /> Expertise in JavaScript, React, HTML,
              CSS, and MongoDB, combined <br /> with experience in Express.js,
              Git, and Visual Studio Code, <br /> enables the creation of
              scalable web applications. Efficient work <br /> in fast-paced
              environments and a drive to expand knowledge <br /> demonstrate
              dedication to the industry. Technical proficiency,
              <br /> passion for software development, and drive make the
              individual <br /> an asset to any software development team.
            </Text>
          </Box>
        </Flex>
      </Center>
      <Button as={Link} to={pdf} display={"none"} download id="resume-button-2">
        Resume
      </Button>
    </Box>
  );
};

export default About;
