import ExperienceCard from "../../../shared/common/ExperienceCard/ExperienceCard";
import "./Experience.css";

function Experience(props) {
  console.log("experienceArray", props.experienceArray);

  return (
    <>
      <section className="experience-main">
        <div className="container">
          <div className="experience-main-child">
            <div className="title">
              <h1>Work Experience</h1>
            </div>
            {/* --- END! title --- */}

            <div className="experience-cards">
              {[0, 0, 0, 0].map((item, index) => (
                <ExperienceCard key={index}></ExperienceCard>
              ))}
            </div>
            {/* --- END! experience-cards --- */}
          </div>
        </div>
      </section>
      {/* --- END! experience-main --- */}
    </>
  );
}

export default Experience;
