import Footer from "../shared/core/Footer/Footer";
import About from "./About/About";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import "./Main.css";
import Profile from "./Profile/Profile";
import Project from "./Project/Project";
import Skill from "./Skill/Skill";

function Main() {
  return (
    <main>
      <Profile></Profile>
      {/* --- END! Profile --- */}

      <About></About>
      {/* --- END! About --- */}

      <Experience></Experience>
      {/* --- END! Experience --- */}

      <Education></Education>
      {/* --- END! Education --- */}

      <Skill></Skill>
      {/* --- END! Skill --- */}

      <Project></Project>
      {/* --- END! Project --- */}

      <Footer></Footer>
      {/* --- END! Footer --- */}
    </main>
  );
}

export default Main;
