import { useFragrance } from "./Navbar";
import { Box, Button, Divider, Heading, Text } from "@chakra-ui/react";

const DogBite = () => {
  const [truth, toogleFunc, count] = useFragrance();

  return (
    <Box>
      <Heading color={"cyan.500"}>
        {truth ? "I am Here" : "This is my Portfolio"}
      </Heading>
      <Divider h={5} />
      <Button
        colorScheme={"blue"}
        variant={"outline"}
        onClick={() => toogleFunc()}
      >
        ToogleMe
      </Button>
      <Text>{count}</Text>
    </Box>
  );
};

export default DogBite;
