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
  let storeCvData = [];

  if (loading) {
    return (
      <>
        <h1>Please wait</h1>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h1>Please Try Again</h1>
      </>
    );
  }

  if (data) {
    storeCvData = [...data.cv.edges];

    return (
      <>
        <main className="cv">
          <Profile profileData={storeCvData[0]?.node}></Profile>
          {/* --- END! Profile --- */}

          <About aboutData={storeCvData[0].node.about}></About>
          {/* --- END! About --- */}

          <Experience
            experienceArray={storeCvData[0].node.experienceSet.edges}
          ></Experience>
          {/* --- END! Experience --- */}

          <Education
            educationArray={storeCvData[0].node.educationSet.edges}
          ></Education>
          {/* --- END! Education --- */}

          <Skill skillArray={storeCvData[0].node.skillSet.edges}></Skill>
          {/* --- END! Skill --- */}

          <Project
            projectsArray={storeCvData[0].node.projectSet.edges}
          ></Project>
          {/* --- END! Project --- */}

          <Footer></Footer>
          {/* --- END! Footer --- */}
        </main>
      </>
    );
  }
}

export default CV;
