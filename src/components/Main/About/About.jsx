import "./About.css";

function About() {
  return (
    <>
      <section className="about-main">
        <div className="container">
          <div className="about-main-child">
            <div className="title">
              <h1>About</h1>
            </div>

            <p>
              As a Full Stack Engineer, I have successfully taken multiple
              products from 0 to 1. I lead teams effectively, ensuring an
              environment where people can do their best work. Currently, I work
              mostly with TypeScript, React, Node.js, and GraphQL. I have over 8
              years of experience in working remotely with companies all around
              the world.
            </p>
          </div>
          {/* --- END! about-main-child --- */}
        </div>
      </section>
      {/* --- END! about-main --- */}
    </>
  );
}

export default About;
