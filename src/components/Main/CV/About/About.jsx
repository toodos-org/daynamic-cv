import "./About.css";

function About(props) {
  return (
    <>
      <section className="about-main">
        <div className="container">
          <div className="about-main-child">
            <div className="title">
              <h1>About</h1>
            </div>

            <p>{props.aboutData}</p>
          </div>
          {/* --- END! about-main-child --- */}
        </div>
      </section>
      {/* --- END! about-main --- */}
    </>
  );
}

export default About;
