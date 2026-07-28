function About() {
  return (
    <section id="about" className="section">

      <div className="section-container about-grid">

        <div>

          <p className="section-label">
            ABOUT
          </p>

          <h2 className="section-title">
            From applied AI systems to foundational
            research questions.
          </h2>

        </div>

        <div className="about-content">

          <p>
            I am an AI/ML engineer and prospective PhD
            researcher interested in large language
            models, AI agents, reasoning, and reliable
            artificial intelligence.
          </p>

          <p>
            My engineering experience with real-world AI
            systems has repeatedly exposed a gap between
            models producing plausible outputs and models
            producing outputs that are consistently
            correct, structured, and dependable.
          </p>

          <p>
            I am interested in studying that gap:
            understanding failure modes in LLM reasoning
            and structured generation, developing
            evaluation methodologies, and exploring
            mechanisms that make AI systems more reliable.
          </p>

          <div className="education">

            <p className="small-label">
              EDUCATION
            </p>

            <h3>
              Arizona State University
            </h3>

            <p>
              Master's Degree
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;