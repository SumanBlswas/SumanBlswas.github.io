import React from "react";
import TravelHutImage from "../Image/TravelHut.png";
import ProjectItem from "../ProjectItem";

const TravelHut = () => {
  const handleTravel = () => {
    window.open("https://travel-hut-by-suman.netlify.app/");
  };
  const handleGithubTravel = () => {
    window.open("https://github.com/SumanBlswas/useful-rest-6977");
  };

  const description = `Witness the culmination of my development prowess. Behold a stunning
  e-commerce website, showcasing an array of men's and women's clothing,
  fragrances, and more. Immerse yourself in the seamless world of online
  shopping, meticulously crafted by my coding expertise.`;

  const title = "Booking Services";

  const heading = "Travel-O-City (Clone)";

  const tech = ["HTML5", "CSS3", "Javascript"];
  return (
    <ProjectItem
      ProjectImage={TravelHutImage}
      title={title}
      description={description}
      handleGithubProject={handleGithubTravel}
      handleProject={handleTravel}
      tech={tech}
      heading={heading}
    />
  );
};

export default TravelHut;
