import { Center, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitStateHome = () => {
  return (
    <VStack
      id="activity"
      pb="50px"
      m="auto"
      mt={0}
      gap={"40px"}
      pl={{ base: 5, md: 0 }}
      pr={{ base: 5, md: 0 }}
    >
      <Text p="65px" pb="0" fontWeight={"bold"} fontSize={"4xl"}>
        Activity
      </Text>
      <GitHubCalendar username="sumanblswas" class="react-activity-calendar" />
      <Flex direction="column">
        <Center pb="30px">
          <img
            id="github-stats-card"
            style={{ height: "200px" }}
            alt="Github Stats"
            src="https://github-readme-stats.vercel.app/api?username=sumanblswas&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117"
          />
        </Center>
        <Flex direction="row" gap={6}>
          <Center>
            <img
              id="github-top-langs"
              style={{ height: "200px" }}
              alt="Suman's Top Languages"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=sumanblswas&theme=dark&hide_border=true&include_all_commits=false&count_private=true&layout=compact"
            />
          </Center>
          <Center>
            <img
              id="github-streak-stats"
              style={{ height: "200px" }}
              alt="Suman's Top Languages"
              src="https://github-readme-streak-stats.herokuapp.com/?user=sumanblswas&theme=dark&hide_border=true"
            />
          </Center>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default GitStateHome;

// # 📊 GitHub Stats:
// ![](https://github-readme-stats.vercel.app/api?username=sumanblswas&theme=dark&hide_border=false&include_all_commits=false&count_private=true)<br/>
// ![](https://github-readme-streak-stats.herokuapp.com/?user=sumanblswas&theme=dark&hide_border=false)<br/>
// ![](https://github-readme-stats.vercel.app/api/top-langs/?username=sumanblswas&theme=dark&hide_border=false&include_all_commits=false&count_private=true&layout=compact)

// ---
// [![](https://visitcount.itsvg.in/api?id=sumanblswas&icon=0&color=0)](https://visitcount.itsvg.in)

// <!-- Proudly created with GPRM ( https://gprm.itsvg.in ) -->
