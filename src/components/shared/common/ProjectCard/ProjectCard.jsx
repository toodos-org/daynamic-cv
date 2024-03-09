import "./ProjectCard.css";

function ProjectCard(props) {
  const projectData = props?.project?.node;

  return (
    <>
      <div className="project-card">
        <div className="project-card-top">
          <div className="project-card-title">
            <h3>
              <a href={projectData?.liveUrl}>
                <span>{projectData?.name}</span>
                <small></small>
              </a>
            </h3>
          </div>

          <div className="project-card-description">
            <p>{projectData?.description}</p>
          </div>
        </div>

        <div className="project-card-bottom">
          <ul>
            <li>Full Stack Developer</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
