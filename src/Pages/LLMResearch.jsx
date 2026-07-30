import Navbar from "../components/Navbar";

function LLMResearch() {
  return (
    <>
      <Navbar />

      <main className="section">
        <div className="section-container">
          <p className="section-label">INDEPENDENT RESEARCH · 2026</p>

          <h1>Reliable Structured Generation in Large Language Models</h1>

          <p className="large-text">
            Evaluating hallucination, omission, field mis-mapping,
            schema adherence, consistency, and validation in
            LLM-based structured information extraction.
          </p>
        </div>
      </main>
    </>
  );
}

export default LLMResearch;