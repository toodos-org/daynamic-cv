import EducationCard from "../../../shared/common/EducationCard/EducationCard";
import "./Education.css";

function Education(props) {
  const educationArray = props?.educationArray;

  return (
    <>
      <section className="education-main">
        <div className="container">
          <div className="education-main-child">
            <div className="title">
              <h1>Education</h1>
            </div>
            {/* --- END! title --- */}

            <div className="education-cards">
              {educationArray.map((education, index) => (
                <EducationCard
                  education={education}
                  key={education?.node?.id}
                />
              ))}
            </div>
            {/* --- END! education-cards --- */}
          </div>
        </div>
      </section>
      {/* --- END! education-main --- */}
    </>
  );
}

export default Education;
