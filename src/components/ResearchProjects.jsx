import { Link } from "react-router-dom";

function ResearchProject({
  number,
  type,
  title,
  status,
  description,
  metrics,
  technologies,
  link,
}) {
  return (
    <article className="project">

      <div className="project-number">
        {number}
      </div>

      <div className="project-content">

        <div className="project-heading">

          <div>

            <p className="project-type">
              {type}
            </p>

            <h3>
              {title}
            </h3>

          </div>

          <span className="status active">
            {status}
          </span>

        </div>

        <p className="project-summary">
          {description}
        </p>

        <div className="project-metrics">

          {metrics.map(([value, label]) => (
            <div key={`${value}-${label}`}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}

        </div>

        <div className="technology-list">

          {technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}

        </div>

        <div className="project-links">

          <Link to={link}>
            View Research →
          </Link>

        </div>

      </div>

    </article>
  );
}

export default ResearchProject;