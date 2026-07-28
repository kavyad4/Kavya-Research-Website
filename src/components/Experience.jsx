function Experience() {
  return (
    <section id="experience" className="section">

      <div className="section-container">

        <p className="section-label">
          RESEARCH-ORIENTED EXPERIENCE
        </p>

        <h2 className="section-title">
          Applied AI Systems
        </h2>

        <div className="experience-card">

          <p className="experience-date">
            2025 — PRESENT
          </p>

          <h3>
            Healthcare AI
          </h3>

          <p className="experience-role">
            LLM Systems · Structured Information Extraction
          </p>

          <p>
            Developed and evaluated production LLM
            pipelines for transforming unstructured
            dictation into structured information.
          </p>

          <p>
            Investigated model reliability issues including
            hallucination, missing information, incorrect
            field mapping, schema violations,
            transcription-error propagation, latency, and
            downstream validation.
          </p>

          <p>
            These failures motivated my broader research
            interest in understanding how LLM systems fail
            under structured-generation constraints and how
            those failures can be detected and mitigated.
          </p>

          <div className="technology-list">
            <span>LLMs</span>
            <span>Gemini</span>
            <span>Python</span>
            <span>FastAPI</span>
            <span>Structured Outputs</span>
            <span>AI Evaluation</span>
          </div>

        </div>

        <div className="experience-card">

          <p className="experience-date">
            2023 — 2025
          </p>

          <h3>
            Arizona State University
          </h3>

          <p className="experience-role">
            Data Analytics · Machine Learning · Data Systems
          </p>

          <p>
            Worked on data-intensive systems spanning
            machine learning, analytics, cloud data
            pipelines, predictive modeling, and large-scale
            reporting.
          </p>

          <p>
            This experience with production data
            infrastructure and applied machine learning
            now informs my research interests in dependable
            AI systems.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Experience;