import React from "react";
import ProjectItem from "../ProjectItem";
import koovs from "../Images/Koovs/koovs.png";
import koovs2 from "../Images/Koovs/koovs2.png";
import koovs3 from "../Images/Koovs/koovs3.png";
import koovs4 from "../Images/Koovs/koovs4.png";
import koovs5 from "../Images/Koovs/koovs5.png";
import koovs6 from "../Images/Koovs/koovs6.png";
import koovs7 from "../Images/Koovs/koovs7.png";
import koovs8 from "../Images/Koovs/koovs8.png";
import koovs9 from "../Images/Koovs/koovs9.png";
import koovs10 from "../Images/Koovs/koovs10.png";
import koovs11 from "../Images/Koovs/koovs11.png";
import koovs12 from "../Images/Koovs/koovs12.png";
import koovs13 from "../Images/Koovs/koovs13.png";
import koovs14 from "../Images/Koovs/koovs14.png";

const Koovs = () => {
  const handleKoovs = () => {
    window.open("https://koovs.vercel.app/");
  };
  const handleGithubKoovs = () => {
    window.open("https://github.com/OnkarK0273/penitent-degree-5872");
  };

  const description = `Indulge in a mesmerizing e-commerce oasis, 
  adorned with alluring fashion, fragrances, and more. Immerse 
  yourself in a meticulously crafted world of seamless online shopping,
   where beauty, elegance, and sophistication converge effortlessly.`;

  const title = "Indian E-Commerce Website";

  const heading = "Koovs (Clone)";

  const tech = [
    "React",
    "Redux",
    "TypeScript",
    "ChakraUI",
    "MongoDB",
    "Express",
    "NodeJS",
    "Redux-Thunk",
  ];

  const ProjectImage = [
    koovs,
    koovs2,
    koovs3,
    koovs4,
    koovs5,
    koovs6,
    koovs7,
    koovs8,
    koovs9,
    koovs10,
    koovs11,
    koovs12,
    koovs13,
    koovs14,
  ];

  return (
    <ProjectItem
      ProjectImage={ProjectImage}
      title={title}
      description={description}
      handleGithubProject={handleGithubKoovs}
      handleProject={handleKoovs}
      tech={tech}
      heading={heading}
    />
  );
};

export default Koovs;
