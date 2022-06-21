import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { PortfolioHeader } from "./PortfolioHeader";

export function Portfolio() {
  return (
    <Container id="portfolio">
      <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
        <h2>My portfolio</h2>
      </ScrollAnimation>

      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <PortfolioHeader
              githubLink={`${process.env.REACT_APP_GIT_HUB}DigitalNomad`}
            />
            <div className="body">
              <h3>Digital Nomad</h3>
              <p>
                An app where you can create your online team and rent
                specialized workspaces around the world
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>NodeJs</li>
                <li>ExpressJs</li>
                <li>MySQL</li>
                <li>NextJs</li>
                <li>ReactJs</li>
                <li>NextJs</li>
                <li>TypeScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <PortfolioHeader
              githubLink={`${process.env.REACT_APP_GIT_HUB}E-Haris-Commerce`}
            />
            <div className="body">
              <h3>E-Haris Commerce</h3>
              <p>
                An online shop where the user can register and sell his products
                or buy any available product
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>NodeJs</li>
                <li>ExpressJs</li>
                <li>MySQL</li>
                <li>NextJs</li>
                <li>ReactJs</li>
                <li>NextJs</li>
                <li>TypeScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
