import "./Skill.css";

function Skill(props) {
  const skills = props.skillArray;
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
                {skills.map((skill) => {
                  return <li key={skill?.node?.id}>${skill?.node?.name}</li>;
                })}
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
