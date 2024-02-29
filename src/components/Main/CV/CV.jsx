import { useQuery } from "@apollo/client";
import { GET_USER_CV_BY_ID } from "../../../gql_operation/queires";
import Footer from "../../shared/core/Footer/Footer";
import About from "./About/About";
import "./CV.css";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Profile from "./Profile/Profile";
import Project from "./Project/Project";
import Skill from "./Skill/Skill";

function CV() {
  const { loading, error, data, fe } = useQuery(GET_USER_CV_BY_ID);

  console.log(error);

  console.log(data);

  return (
    <>
      <main className="cv">
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
    </>
  );
}

export default CV;
