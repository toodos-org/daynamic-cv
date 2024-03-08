import ProjectCard from "../../../shared/common/ProjectCard/ProjectCard";
import "./Project.css";

function Project(props) {
  console.log("projectsArray", props.projectsArray);

  return (
    <>
      <section className="project">
        <div className="container">
          <div className="project-main">
            <div className="title">
              <h1>Projects</h1>
            </div>
            {/* --- END! title --- */}

            <div className="all-projects">
              <ProjectCard></ProjectCard>
              <ProjectCard></ProjectCard>
              <ProjectCard></ProjectCard>
              <ProjectCard></ProjectCard>
            </div>
            {/* --- END! all-projects --- */}
          </div>
        </div>
      </section>
      {/* --- END! project --- */}
    </>
  );
}

export default Project;
