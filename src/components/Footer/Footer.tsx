import { Container } from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";

export function Footer() {

  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>Haris</span>
        <span>Liv</span>
      </a>
      <div>
        <p>
          <img src={reactIcon} alt="React" /> =<span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a href={process.env.REACT_APP_LINKEDIN} target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href={process.env.REACT_APP_GIT_HUB}
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </Container>
  );
}
