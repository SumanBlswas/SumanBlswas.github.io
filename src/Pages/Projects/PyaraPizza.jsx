import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Flex,
} from "@chakra-ui/react";
import { ImGithub } from "react-icons/im";
import { SiFirefoxbrowser } from "react-icons/si";
import PyaraPizzaImage from "./Image/PyaraPiizza.png";

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

const PyaraPiizza = () => {
  const handleTravel = () => {
    window.open("https://pyara-piizza.netlify.app/");
  };
  const handleGithubTravel = () => {
    window.open("https://github.com/SumanBlswas/parallel-ship-1369");
  };
  const bgColor = useColorModeValue("#461783", "rgb(234, 246, 249)");
  const color2 = useColorModeValue("#fff", "#461783");
  const color2S = useColorModeValue("#000", "#fff");
  return (
    <Center py={12} className="project-card">
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={bgColor}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
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
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={PyaraPizzaImage}
          />
        </Box>
        <Stack pt={10} align={"center"} fontFamily={"cursive"}>
          <Heading
            className="project-title"
            fontSize={"2xl"}
            fontFamily={"body"}
            fontWeight={500}
          >
            Domino's (Clone)
          </Heading>
          <Text
            className="project-description"
            color={"gray.500"}
            fontSize={"sm"}
            textTransform={"uppercase"}
          >
            Pizza Delivery App
          </Text>
          <Flex
            className="project-tech-stack"
            justify={"space-between"}
            gap={"5px"}
            align={"center"}
          >
            <Text p={"3px"} bg={color2} color={color2S} borderRadius={"5px"}>
              React
            </Text>
            <Text p={"3px"} bg={color2} color={color2S} borderRadius={"5px"}>
              ChakraUI
            </Text>
            <Text p={"3px"} bg={color2} color={color2S} borderRadius={"5px"}>
              JavaScript
            </Text>
          </Flex>
          <Stack direction={"row"} align={"center"}>
            <Button
              className="project-github-link"
              onClick={handleGithubTravel}
              colorScheme={"green"}
            >
              <ImGithub />
            </Button>
            <Button
              className="project-deployed-link"
              onClick={handleTravel}
              colorScheme={"red"}
            >
              <SiFirefoxbrowser />
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default PyaraPiizza;
