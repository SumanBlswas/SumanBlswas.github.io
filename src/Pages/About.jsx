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
// import { Link } from "react-router-dom";
import DummyMe from "../Image/DummyMe.png";
import pdf from "../Image/Suman_Biswas_Portfolio.pdf";

const downloadResume = () => {
  window.open(
    "https://drive.google.com/file/d/1tlNTe3gqnm_9NpEzocTr3CB_iE3dIbxw/view?usp=sharing"
  );
};

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
      <Button onClick={downloadResume} id="resume-button-2">
        <a
          id={"resume-link-2"}
          href={pdf}
          target="_blank"
          rel={"noreferrer"}
          download={"Suman_Biswas_Resume.pdf"}
        >
          Resume
        </a>
      </Button>
    </Box>
  );
};

export default About;
