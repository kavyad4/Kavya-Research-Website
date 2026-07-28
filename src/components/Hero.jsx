function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-container">

        <p className="hero-label">
          AI / ML ENGINEER · PROSPECTIVE PHD RESEARCHER
        </p>

        <h1>
          Kavya Dwivedi
        </h1>

        <h2>
          Building and studying reliable{" "}
          <span>
            large language model systems.
          </span>
        </h2>

        <p className="hero-description">
          I work on applied AI systems and am interested in
          understanding and improving the reasoning,
          reliability, and structured generation capabilities
          of large language models and agentic systems.
        </p>

        <p className="hero-description secondary">
          My current work spans production LLM pipelines,
          structured information extraction, predictive
          machine learning, temporal modeling, and AI system
          evaluation.
        </p>

        <div className="research-tags">

          <span>Large Language Models</span>

          <span>AI Agents</span>

          <span>Reliable AI</span>

          <span>Reasoning</span>

          <span>Machine Learning</span>

        </div>

        <div className="hero-buttons">

          <a
            href="#research"
            className="button primary-button"
          >
            View Research
          </a>

          <a
            href="/Kavya_Dwivedi_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="button secondary-button"
          >
            Download CV
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;