import "./EducationCard.css";

function EducationCard(props) {
  const educationData = props.education.node;
  return (
    <>
      <div className="education-card">
        <div className="education-card-title">
          <h3 className="edu-card-title-left">{educationData?.school}</h3>

          <div className="edu-card-title-right">
            <p>
              {new Date(educationData.startDate).getFullYear()} -
              {new Date(educationData.endDate).getFullYear()}
            </p>
          </div>
        </div>

        <div className="education-info">
          <p className="info">{educationData?.degree}</p>
        </div>
      </div>
      {/* --- END! education-card --- */}
    </>
  );
}

export default EducationCard;
