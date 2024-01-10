import "./ExperienceCard.css";

function ExperienceCard() {
  return (
    <>
      <div className="experience-card">
        <div className="experience-card-title">
          <h3 className="exp-card-title-left">
            <a>Parabol</a>
            <div className={true ? "type" : "type hide"}>Remote</div>
          </h3>

          <div className="exp-card-title-right">
            <p>2021 - 2022</p>
          </div>
        </div>

        <div className="experience-info">
          <h4 className="designation">
            Lead Android Developer → Full Stack Developer
          </h4>

          <p className="info">
            Implemented new features, led squad, worked on improving the way
            developers ship the code, started migration from Emotion to Tailwind
            CSS and more. Technologies: React, TypeScript, GraphQL
          </p>
        </div>
      </div>
      {/* --- END! experience-card --- */}
    </>
  );
}

export default ExperienceCard;
