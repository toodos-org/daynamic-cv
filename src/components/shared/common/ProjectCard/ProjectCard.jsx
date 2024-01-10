import "./ProjectCard.css";

function ProjectCard() {
  return (
    <>
      <div className="project-card">
        <div className="project-card-top">
          <div className="project-card-title">
            <h3>
              <a>
                <span>Consultly</span>
                <small></small>
              </a>
            </h3>
          </div>

          <div className="project-card-description">
            <p>Howdy is a place for you to join communities you care about</p>
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
