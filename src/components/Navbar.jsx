import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-container">

        <Link to="/" className="nav-logo">
          KD
        </Link>

        <div className="nav-links">

          <a href="/#research">
            Research
          </a>

          <a href="/#experience">
            Experience
          </a>

          <a href="/#publications">
            Manuscripts
          </a>

          <a href="/#about">
            About
          </a>

          <a
            href="/Kavya_Dwivedi_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="nav-cv"
          >
            CV
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;