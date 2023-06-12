import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsPerson, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const bgColor = useColorModeValue("#461783", "rgb(234, 246, 249)");
  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/suman-biswas-158022248/");
  };

  const handleGitHub = () => {
    window.open("https://github.com/SumanBlswas");
  };
  return (
    <Container
      id="contact"
      bg={bgColor}
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
    >
      <Flex gap={4} justify={"center"} align={"center"}>
        <Heading
          as={"h1"}
          fontFamily={"'Sono', sans-serif"}
          textDecoration={"underline"}
        >
          Contact
        </Heading>
        <Heading fontFamily={"'Sono', sans-serif"} color={"tomato"}>
          Me
        </Heading>
      </Flex>
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }} justify={"center"} alignItems={"center"}>
              <WrapItem>
                <Box >
                  <Heading fontFamily={"'Sono', sans-serif"}>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack
                      pl={0}
                      spacing={3}
                      alignItems="flex-start"
                      textAlign={"center"}
                    >
                      <Button
                        id="contact-phone"
                        textAlign={"left"}
                        size="md"
                        height="48px"
                        width="180px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}
                      >
                        +91-7908357708
                      </Button>
                      <Button
                        id="contact-email"
                        textAlign={"left"}
                        size="md"
                        height="48px"
                        width="250px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}
                      >
                        sumanmanner@gmail.com
                      </Button>
                      <Button
                        textAlign={"left"}
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                      >
                        Kolkata,WestBengal
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      id="contact-github"
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsGithub size="28px" />}
                      onClick={handleGitHub}
                    />
                    <IconButton
                      id="contact-linkedin"
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsLinkedin size="28px" />}
                      onClick={handleLinkedIn}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Contact;
