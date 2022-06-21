import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  align-items: center;
  background: rgba(0, 0, 0, 0);
  .hero-text {
    flex-basis: 60%;
    p {
      font-size: 1.8rem;
      margin-top: 2rem;
    }
    h1 {
      font-size: 7rem;
    }
    h5 {
      font-size: 2.3rem;
      color: var(--green);
      margin-top: 2rem;
    }

    h2 {
      color: var(--green);
      margin: 3rem 0;
    }
  }

  .button {
    margin-top: 3rem;
    padding: 1.4rem 6rem;
    display: block;
    text-align: center;
    width: 50%;
  }

  .hero-image {
    flex-basis: 40%;
    img {
      max-width: 500px;
    }
  }
  .hard-skills {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 3.4rem;
    }
  }

  @media (max-width: 960px) {
    display: block;
    margin-top: 15%;
    .hero-text {
      h1 {
        font-size: 5rem;
      }
    }

    .hero-image {
      display: none;
    }
  }

  @media (max-width: 600px) {
    margin-top: 25%;
  }
  @media (max-width: 480px) {
    margin-top: 35%;
  }
`;
