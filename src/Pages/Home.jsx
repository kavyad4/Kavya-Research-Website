import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ResearchInterests from "../components/ResearchInterests";
import ResearchProject from "../components/ResearchProject";
import Experience from "../components/Experience";
import Publications from "../components/Publications";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <ResearchInterests />

        <section id="research" className="section alternate">
          <div className="section-container">

            <p className="section-label">
              SELECTED RESEARCH
            </p>

            <h2 className="section-title">
              Research & Projects
            </h2>

            <ResearchProject
              number="01"
              type="INDEPENDENT RESEARCH · 2026"
              title="Reliable Structured Generation in Large Language Models"
              status="In Progress"
              description="An empirical investigation of failure modes in LLM-based structured information extraction, including hallucination, omission, incorrect field mapping, schema violations, and inconsistent model outputs."
              metrics={[
                ["Hallucination", "Evaluation"],
                ["Schema", "Adherence"],
                ["Field", "Mis-mapping"],
                ["Model", "Consistency"],
              ]}
              technologies={[
                "Python",
                "LLMs",
                "Structured Generation",
                "Evaluation",
                "JSON Schema",
              ]}
              link="/research/llm-reliability"
            />

            <ResearchProject
              number="02"
              type="MACHINE LEARNING RESEARCH · 2026"
              title="Sustaining Balance: ESG-Driven Food Security Prediction"
              status="Manuscript"
              description="A longitudinal machine-learning study investigating whether environmental, social, governance, socioeconomic, and sentiment indicators can predict future food insecurity across countries."
              metrics={[
                ["198", "Countries"],
                ["Temporal", "Forecasting"],
                ["LightGBM", "ML Model"],
                ["SHAP", "Explainability"],
              ]}
              technologies={[
                "LightGBM",
                "LSTM",
                "SHAP",
                "Python",
                "Temporal Modeling",
                "ESG Analytics",
              ]}
              link="/research/esg-food-security"
            />

          </div>
        </section>

        <Experience />

        <Publications />

        <About />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default Home;