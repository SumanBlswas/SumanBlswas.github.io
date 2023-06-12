import React from "react";
import ProjectItem from "../ProjectItem";
import pizza from "../Images/PyaraPiizza/pizza.png";
import pizza1 from "../Images/PyaraPiizza/pizza2.png";
import pizza2 from "../Images/PyaraPiizza/pizza3.png";
import pizza3 from "../Images/PyaraPiizza/pizza4.png";
import pizza4 from "../Images/PyaraPiizza/pizza5.png";
import pizza5 from "../Images/PyaraPiizza/pizza6.png";
import pizza6 from "../Images/PyaraPiizza/pizza7.png";
import pizza7 from "../Images/PyaraPiizza/pizza8.png";
import pizza8 from "../Images/PyaraPiizza/pizza9.png";
import pizza9 from "../Images/PyaraPiizza/pizza10.png";
import pizza10 from "../Images/PyaraPiizza/pizza11.png";

const PyaraPiizza = () => {
  const handlePizza = () => {
    window.open("https://pyara-piizza.netlify.app/");
  };
  const handleGithubPizza = () => {
    window.open("https://github.com/SumanBlswas/parallel-ship-1369");
  };

  const description = `Introducing a delectable pizza selling and delivery app,
   where cravings meet convenience. Explore a tantalizing menu, customize your 
   dream pizza, and have it swiftly delivered to your doorstep. Savor the seamless 
   experience of ordering your favorite flavors with just a few taps.`;

  const title = "Pizza Delivery App";

  const heading = "Domino's (Clone)";

  const tech = ["React", "ChakraUI", "Javascript"];

  const ProjectImage = [
    pizza,
    pizza1,
    pizza2,
    pizza3,
    pizza4,
    pizza5,
    pizza6,
    pizza7,
    pizza8,
    pizza9,
    pizza10,
  ];

  return (
    <ProjectItem
      ProjectImage={ProjectImage}
      title={title}
      description={description}
      handleGithubProject={handleGithubPizza}
      handleProject={handlePizza}
      tech={tech}
      heading={heading}
    />
  );
};

export default PyaraPiizza;
