import React from "react";
import elite from "../Images/EliteStore/elite.png";
import elite2 from "../Images/EliteStore/elite2.png";
import elite3 from "../Images/EliteStore/elite3.png";
import elite4 from "../Images/EliteStore/elite4.png";
import elite5 from "../Images/EliteStore/elite5.png";
import elite6 from "../Images/EliteStore/elite6.png";
import elite7 from "../Images/EliteStore/elite7.png";
import ProjectItem from "../ProjectItem";

const EliteStore = () => {
  const handleEliteStore = () => {
    window.open("https://elite-store-group.netlify.app/");
  };
  const handleGithubhandleEliteStore = () => {
    window.open("https://github.com/gsandha/fluffy-collar-7061");
  };

  const description = `Embark on an enchanting shopping journey, 
  where elegance meets technology. Behold a captivating e-commerce 
  haven, meticulously crafted to showcase exquisite clothing, 
  fragrances, and more. Immerse yourself in a seamless world of 
  beauty, tailored to your desires. Welcome to a stunning web of indulgence.`;

  const title = "Women & Men's Care E-Commerce";

  const heading = "DermStore (Clone)";

  const tech = ["HTML5", "CSS3", "Javascript"];

  const ProjectImage = [
    elite,
    elite2,
    elite2,
    elite3,
    elite4,
    elite5,
    elite6,
    elite7,
  ];

  return (
    <ProjectItem
      ProjectImage={ProjectImage}
      title={title}
      description={description}
      handleGithubProject={handleGithubhandleEliteStore}
      handleProject={handleEliteStore}
      tech={tech}
      heading={heading}
    />
  );
};

export default EliteStore;
