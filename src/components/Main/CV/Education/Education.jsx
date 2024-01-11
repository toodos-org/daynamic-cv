import EducationCard from "../../../shared/common/EducationCard/EducationCard";
import "./Education.css";

function Education() {
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
              {[0].map((item, index) => (
                <EducationCard key={index} />
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
