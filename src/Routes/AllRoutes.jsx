import { Route, Routes } from "react-router-dom";
import GitStat from "../Components/GitStat/GitStat";
// import About from "../Pages/About";
// import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
// import Projects from "../Pages/Projects";
// import Skills from "../Pages/Skills";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/git-stat" element={<GitStat />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
};

export default AllRoutes;
