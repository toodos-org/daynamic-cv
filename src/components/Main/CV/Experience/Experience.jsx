import ExperienceCard from "../../../shared/common/ExperienceCard/ExperienceCard";
import "./Experience.css";

function Experience(props) {
  const experiences = props?.experienceArray;

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
              {experiences.map((experience) => (
                <ExperienceCard
                  experience={experience}
                  key={experience?.node?.id}
                ></ExperienceCard>
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
