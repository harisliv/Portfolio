import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import profileImage from "../../assets/me.png";

export function About() {
  return (
    <Container id="about">
    <div className="about-image">
      <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
        <img src={profileImage} alt="Imagem de perfil" />
      </ScrollAnimation>
    </div>
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <p>
            Front End Engineer with 4 years of commercial experience building
            and maintaining web applications. Self-motivated, confident in
            creating logical and innovative solutions in response to complex
            problems.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInRight"
          delay={0.4 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            Able to effectively self-manage during independent projects, as well
            as collaborate in a team setting. Demonstrated the ability to work
            diligently under pressure to meet deadlines
          </p>
        </ScrollAnimation>
        
      </div>
    </Container>
  );
}
