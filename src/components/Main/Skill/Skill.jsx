import "./Skill.css";

function Skill() {
  return (
    <>
      <section className="skill">
        <div className="container">
          <div className="skill-main">
            <div className="title">
              <h1>Skills</h1>
            </div>
            {/* --- END! title --- */}

            <div className="all-skills">
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Angular</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* --- END! skill --- */}
    </>
  );
}

export default Skill;
