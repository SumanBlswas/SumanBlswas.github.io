import { Box, Center, Heading, Img } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";

const GitStat = () => {
  return (
    <Center>
      <Box pt={"8%"}>
        <Heading textAlign={{ md: "center" }}>Hi Welcome to GitStat</Heading>
        <Center mt={"10%"}>
          <GitHubCalendar username="sumanblswas" />
        </Center>
        <Box pt={"8%"} width="100%" display={{ md: "flex" }}>
          <Img
            src="https://github-readme-streak-stats.herokuapp.com?user=SumanBlswas&theme=vue&hide_border=false&border_radius=6.5&date_format=M%20j%5B%2C%20Y%5D"
            alt="streakstat"
            mx={{ md: "auto" }}
            width="100%"
          />
          <Img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=SumanBlswas"
            alt="top_languages"
            mx={{ md: "auto" }}
            width="100%"
          />
          <Img
            src="https://github-readme-stats.vercel.app/api?username=SumanBlswas&count_private=true"
            alt="stat-card"
            mx={{ md: "auto" }}
            width="100%"
          />
        </Box>
      </Box>
    </Center>
  );
};

export default GitStat;
