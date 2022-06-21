import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";

export function Contact() {
  return (
    <Container id="contactme">
      <header>
        <h2>Get in touch with me</h2>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:livieratos.theoxaris@gmail.com">
            livieratos.theoxaris@gmail.com
          </a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+306979058419">(+30) 6979058419</a>
        </div>
      </div>
    </Container>
  );
}
