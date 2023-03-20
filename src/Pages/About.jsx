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
// import pdf from "../Image/Suman_Biswas_Portfolio.pdf";

const downloadResume = () => {
  window.open(
    "https://export-download.canva.com/fFXkM/DAFaaJfFXkM/5/0-43632598871.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20230320%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230320T085609Z&X-Amz-Expires=26031&X-Amz-Signature=4e6774d47c8f68440b2202d4f3522411a54deb824849d327b1e7b479fd06b471&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Copy%2520of%2520sumanmanner%2540gmail.com.pdf&response-expires=Mon%2C%2020%20Mar%202023%2016%3A10%3A00%20GMT"
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
        Resume
      </Button>
    </Box>
  );
};

export default About;
