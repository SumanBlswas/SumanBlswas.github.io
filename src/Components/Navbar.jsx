import React from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  useColorMode,
  useBreakpointValue,
  IconButton,
  HStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiDownload, FiMenu } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  const displayHashLinks = useBreakpointValue({
    base: "none",
    md: "none",
    lg: "flex",
  });

  const displayHashLinks2 = useBreakpointValue({
    base: "none",
    md: "block",
  });

  const secondaryTextColor = useColorModeValue("black", "white");

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const handleMobileNavClose = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <>
      <Box
        id="nav-menu"
        position="fixed"
        width="100%"
        bgGradient="linear-gradient(to right, #461783, #461783)"
        p={4}
        zIndex={2}
      >
        <Flex justify="space-between" wrap="wrap" align="center">
          <Flex
            justify={"space-between"}
            w={{ base: "100%", md: "100%", lg: "auto" }}
          >
            <Link to="/">
              <Text
                fontSize="3xl"
                fontFamily="'Josefin Slab', serif"
                fontWeight="black"
                color="white"
              >
                {`<Suman />`}
              </Text>
            </Link>

            <IconButton
              icon={
                <Flex
                  placeItems={"center"}
                  justify={"center"}
                  color={secondaryTextColor}
                >
                  <FiMenu />
                </Flex>
              }
              colorScheme="whiteAlpha"
              display={{ base: "block", md: "block", lg: "none" }}
              onClick={handleMobileNavToggle}
            />
          </Flex>

          <Drawer
            isOpen={isMobileNavOpen}
            onClose={handleMobileNavClose}
            placement="left"
          >
            <DrawerOverlay>
              <DrawerContent
                bgGradient="linear-gradient(to right, #461783, #C471FF)"
                color="white"
                maxW="100%"
                borderBottomRightRadius="0"
                borderTopRightRadius="0"
                clipPath="polygon(0 0, 100% 0, 100% 0, 40% 100%, 0 100%)"
                boxShadow="0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)"
              >
                <DrawerCloseButton />
                <DrawerHeader>
                  <FiMenu />
                </DrawerHeader>

                <DrawerBody>
                  <Flex
                    direction="column"
                    align={{ base: "center", md: "center", lg: "initial" }}
                    mb={{ base: 4, md: 4, lg: 0 }}
                  >
                    <a
                      className="nav-link home"
                      href="/#"
                      onClick={handleMobileNavClose}
                    >
                      <motion.div
                        as={Text}
                        color="white"
                        _hover={{ color: "grey" }}
                        animate={{
                          y: [0, -5, 0],
                          transition: { duration: 2, repeat: Infinity },
                        }}
                        style={{
                          fontFamily: "'Sono', sans-serif",
                          fontSize: "30px",
                        }}
                      >
                        Home
                      </motion.div>
                    </a>
                    <a
                      className="nav-link about"
                      href="#about"
                      onClick={handleMobileNavClose}
                    >
                      <motion.div
                        as={Text}
                        color="white"
                        _hover={{ color: "grey" }}
                        animate={{
                          y: [0, -5, 0],
                          transition: { duration: 2, repeat: Infinity },
                        }}
                        style={{
                          fontFamily: "'Sono', sans-serif",
                          fontSize: "30px",
                        }}
                      >
                        About
                      </motion.div>
                    </a>
                    <a
                      className="nav-link skills"
                      href="/#skills"
                      onClick={handleMobileNavClose}
                    >
                      <motion.div
                        as={Text}
                        color="white"
                        _hover={{ color: "grey" }}
                        animate={{
                          y: [0, -5, 0],
                          transition: { duration: 2, repeat: Infinity },
                        }}
                        style={{
                          fontFamily: "'Sono', sans-serif",
                          fontSize: "30px",
                        }}
                      >
                        Skills
                      </motion.div>
                    </a>
                    <a
                      className="nav-link projects"
                      href="#projects"
                      onClick={handleMobileNavClose}
                    >
                      <motion.div
                        as={Text}
                        color="white"
                        _hover={{ color: "grey" }}
                        animate={{
                          y: [0, -5, 0],
                          transition: { duration: 2, repeat: Infinity },
                        }}
                        style={{
                          fontFamily: "'Sono', sans-serif",
                          fontSize: "30px",
                        }}
                      >
                        Projects
                      </motion.div>
                    </a>
                    <a
                      className="nav-link activity"
                      href="#activity"
                      onClick={handleMobileNavClose}
                    >
                      <motion.div
                        as={Text}
                        color="white"
                        _hover={{ color: "grey" }}
                        animate={{
                          y: [0, -5, 0],
                          transition: { duration: 2, repeat: Infinity },
                        }}
                        style={{
                          fontFamily: "'Sono', sans-serif",
                          fontSize: "30px",
                        }}
                      >
                        GitStat
                      </motion.div>
                    </a>
                    <a
                      className="nav-link contact"
                      href="#contact"
                      onClick={handleMobileNavClose}
                    >
                      <motion.div
                        as={Text}
                        color="white"
                        _hover={{ color: "grey" }}
                        animate={{
                          y: [0, -5, 0],
                          transition: { duration: 2, repeat: Infinity },
                        }}
                        style={{
                          fontFamily: "'Sono', sans-serif",
                          fontSize: "30px",
                        }}
                      >
                        Contact
                      </motion.div>
                    </a>
                    <Flex flexDir={"column"} gap={3}>
                      <motion.div
                        as={Text}
                        color="white"
                        _hover={{ color: "grey" }}
                        animate={{
                          y: [0, -5, 0],
                          transition: { duration: 2, repeat: Infinity },
                        }}
                        style={{
                          fontFamily: "'Sono', sans-serif",
                        }}
                      >
                        <Flex
                          justify={"space-between"}
                          gap={2}
                          align={"center"}
                        >
                          <Button
                            onClick={toggleColorMode}
                            bgGradient="linear-gradient(to right, #461783, #C471FF)"
                            _hover={{
                              bgGradient:
                                "linear-gradient(to left, #461783, #C471FF)",
                            }}
                          >
                            <motion.div
                              as={Text}
                              color="white"
                              _hover={{ color: "grey" }}
                              animate={{
                                y: [0, -2, 0],
                                transition: { duration: 2, repeat: Infinity },
                              }}
                              style={{
                                fontFamily: "'Sono', sans-serif",
                              }}
                            >
                              <Flex
                                justify={"space-between"}
                                gap={2}
                                align={"center"}
                              >
                                <MdDarkMode />
                                Neon Mode
                              </Flex>
                            </motion.div>
                          </Button>
                        </Flex>
                      </motion.div>

                      <motion.div
                        as={Text}
                        color="white"
                        _hover={{ color: "grey" }}
                        animate={{
                          y: [0, -5, 0],
                          transition: { duration: 2, repeat: Infinity },
                        }}
                        style={{
                          fontFamily: "'Sono', sans-serif",
                        }}
                      >
                        <Flex
                          justify={"space-between"}
                          gap={2}
                          align={"center"}
                        >
                          <a
                            id="resume-link-1"
                            className="nav-link resume"
                            href="https://drive.google.com/u/0/uc?id=1tlNTe3gqnm_9NpEzocTr3CB_iE3dIbxw&export=download"
                            onClick={() => {
                              window.open(
                                `https://drive.google.com/file/d/1tlNTe3gqnm_9NpEzocTr3CB_iE3dIbxw/view?usp=sharing`
                              );
                            }}
                            display={displayHashLinks2}
                          >
                            <Button
                              bg={"#C471FF"}
                              color={"#fff"}
                              _hover={{ bg: "#FF9A9E", color: "#000" }}
                              id="resume-button-1"
                            >
                              <motion.div
                                as={Text}
                                color="white"
                                _hover={{ color: "grey" }}
                                animate={{
                                  y: [0, -2, 0],
                                  transition: { duration: 2, repeat: Infinity },
                                }}
                                style={{
                                  fontFamily: "'Sono', sans-serif",
                                  // fontSize: "30px",
                                }}
                              >
                                <Flex
                                  justify={"space-between"}
                                  gap={2}
                                  align={"center"}
                                >
                                  <FiDownload />
                                  Resume
                                </Flex>
                              </motion.div>
                            </Button>
                          </a>
                        </Flex>
                      </motion.div>
                    </Flex>
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>

          <Flex align="center">
            <HStack spacing={4} display={displayHashLinks}>
              <HashLink
                className="nav-link home"
                to="#"
                smooth={true}
                display={displayHashLinks}
              >
                <Text
                  fontSize={"2xl"}
                  color={"white"}
                  transition={"color 0.3s ease"}
                  _hover={{ color: "grey" }}
                  animation={"bounce 2s ease-in-out infinite"}
                  display={displayHashLinks}
                  fontFamily="'Josefin Sans', sans-serif"
                  fontWeight={"black"}
                >
                  Home
                </Text>
              </HashLink>
              <HashLink
                className="nav-link about"
                to="#about"
                smooth={true}
                display={displayHashLinks}
              >
                <Text
                  fontSize={"2xl"}
                  color={"white"}
                  transition={"color 0.3s ease"}
                  _hover={{ color: "grey" }}
                  animation={"bounce 2s ease-in-out infinite"}
                  display={displayHashLinks}
                  fontFamily="'Josefin Sans', sans-serif"
                  fontWeight={"black"}
                >
                  About
                </Text>
              </HashLink>
              <HashLink
                className="nav-link skills"
                to="#skills"
                smooth={true}
                display={displayHashLinks}
              >
                <Text
                  fontSize={"2xl"}
                  color={"white"}
                  transition={"color 0.3s ease"}
                  _hover={{ color: "grey" }}
                  animation={"bounce 2s ease-in-out infinite"}
                  display={displayHashLinks}
                  fontFamily="'Josefin Sans', sans-serif"
                  fontWeight={"black"}
                >
                  Skills
                </Text>
              </HashLink>
              <HashLink
                className="nav-link projects"
                to="#projects"
                smooth={true}
                display={displayHashLinks}
              >
                <Text
                  fontSize={"2xl"}
                  color={"white"}
                  transition={"color 0.3s ease"}
                  _hover={{ color: "grey" }}
                  animation={"bounce 2s ease-in-out infinite"}
                  display={displayHashLinks}
                  fontFamily="'Josefin Sans', sans-serif"
                  fontWeight={"black"}
                >
                  Projects
                </Text>
              </HashLink>
              <HashLink
                className="nav-link activity"
                to="#activity"
                smooth={true}
                display={displayHashLinks}
              >
                <Text
                  fontSize={"2xl"}
                  color={"white"}
                  transition={"color 0.3s ease"}
                  _hover={{ color: "grey" }}
                  animation={"bounce 2s ease-in-out infinite"}
                  display={displayHashLinks}
                  fontFamily="'Josefin Sans', sans-serif"
                  fontWeight={"black"}
                >
                  GitStat
                </Text>
              </HashLink>
              <HashLink
                className="nav-link contact"
                to="#contact"
                smooth={true}
                display={displayHashLinks}
              >
                <Text
                  fontSize={"2xl"}
                  color={"white"}
                  transition={"color 0.3s ease"}
                  _hover={{ color: "grey" }}
                  animation={"bounce 2s ease-in-out infinite"}
                  display={displayHashLinks}
                  fontFamily="'Josefin Sans', sans-serif"
                  fontWeight={"black"}
                >
                  Contact
                </Text>
              </HashLink>
              <Button onClick={toggleColorMode}>
                <Flex justify={"space-between"} gap={2} align={"center"}>
                  <MdDarkMode />
                  Neon Mode
                </Flex>
              </Button>
              <a
                id="resume-link-1"
                className="nav-link resume"
                href="https://drive.google.com/u/0/uc?id=1tlNTe3gqnm_9NpEzocTr3CB_iE3dIbxw&export=download"
                onClick={() => {
                  window.open(
                    `https://drive.google.com/file/d/1tlNTe3gqnm_9NpEzocTr3CB_iE3dIbxw/view?usp=sharing`
                  );
                }}
                display={displayHashLinks2}
              >
                <Button
                  bg={"#C471FF"}
                  color={"#fff"}
                  _hover={{ bg: "#FF9A9E", color: "#000" }}
                  id="resume-button-1"
                >
                  <Flex justify={"space-between"} gap={2} align={"center"}>
                    <FiDownload />
                    Resume
                  </Flex>
                </Button>
              </a>
            </HStack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
