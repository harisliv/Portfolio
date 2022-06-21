import Particles, { IOptions, RecursivePartial } from "react-tsparticles";
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Portfolio } from "../Portfolio/Portfolio";
import { particlesOptions } from "./particleOptions";

export function Main() {
  return (
    <Container>
      <Particles
        id="tsparticles"
        options={particlesOptions as RecursivePartial<IOptions>}
      />
      <Hero></Hero>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </Container>
  );
}
