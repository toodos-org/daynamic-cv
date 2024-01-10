import "./EducationCard.css";

function EducationCard() {
  return (
    <>
      <div className="education-card">
        <div className="education-card-title">
          <h3 className="edu-card-title-left">
            Wrocław University of Technology
          </h3>

          <div className="edu-card-title-right">
            <p>2021 - 2022</p>
          </div>
        </div>

        <div className="education-info">
          <p className="info">
            Bachelor's Degree in Control systems engineering and Robotics
          </p>
        </div>
      </div>
      {/* --- END! education-card --- */}
    </>
  );
}

export default EducationCard;
