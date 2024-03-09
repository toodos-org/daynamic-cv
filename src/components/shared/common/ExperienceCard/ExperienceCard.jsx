import "./ExperienceCard.css";

function ExperienceCard(props) {
  const experienceData = props.experience.node;

  return (
    <>
      <div className="experience-card">
        <div className="experience-card-title">
          <h3 className="exp-card-title-left">
            <a href={experienceData?.companyWebsite}>
              {experienceData?.company}
            </a>
            <div className={true ? "type" : "type hide"}>
              {experienceData?.jobType}
            </div>
          </h3>

          <div className="exp-card-title-right">
            <p>
              {new Date(experienceData.startDate).getFullYear()} -{" "}
              {new Date(experienceData.endDate).getFullYear()}
            </p>
          </div>
        </div>

        <div className="experience-info">
          <h4 className="designation">
            {/* Lead Android Developer → Full Stack Developer */}
            {experienceData?.position}
          </h4>

          <p className="info">{experienceData?.description}</p>
        </div>
      </div>
      {/* --- END! experience-card --- */}
    </>
  );
}

export default ExperienceCard;
