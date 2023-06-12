import React from "react";
import ProjectItem from "../ProjectItem";
import lime from "../Images/LimeRoad/lime.png";
import lime2 from "../Images/LimeRoad/lime2.png";
import lime3 from "../Images/LimeRoad/lime3.png";
import lime4 from "../Images/LimeRoad/lime4.png";
import lime5 from "../Images/LimeRoad/lime5.png";
import lime6 from "../Images/LimeRoad/lime6.png";
import lime7 from "../Images/LimeRoad/lime7.png";
import lime8 from "../Images/LimeRoad/lime8.png";
import lime9 from "../Images/LimeRoad/lime9.png";
import lime10 from "../Images/LimeRoad/lime10.png";
import lime11 from "../Images/LimeRoad/lime11.png";

const LimeRoad = () => {
  const handleLimeRoad = () => {
    window.open("https://frontend-nu-hazel-89.vercel.app/");
  };

  const handleGithubLimeRoad = () => {
    window.open("https://github.com/SumanBlswas/spicy-yak-7891");
  };

  const description = `Witness the culmination of my coding prowess. 
  Behold a stunning e-commerce site, showcasing an array of clothing, 
  fragrances, and more. Immerse yourself in a seamless world of online 
  shopping, meticulously crafted by my expertise.`;

  const title = "Indian E-Commerce Website";

  const heading = "LimeRoad (Clone)";

  const tech = [
    "React",
    "Redux",
    "MongoDB",
    "NodeJS",
    "Bcrypt",
    "Jwt",
    "Express",
    "Javasrcipt",
    "ChakraUI",
  ];

  const ProjectImage = [
    lime,
    lime2,
    lime3,
    lime4,
    lime5,
    lime6,
    lime7,
    lime8,
    lime9,
    lime10,
    lime11,
  ];

  return (
    <ProjectItem
      ProjectImage={ProjectImage}
      title={title}
      description={description}
      handleGithubProject={handleGithubLimeRoad}
      handleProject={handleLimeRoad}
      tech={tech}
      heading={heading}
    />
  );
};

export default LimeRoad;
