import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: flex;
  align-items: center;
  gap: 7rem;

  h2 {
    display: inline-block;
    margin-bottom: 3rem;
    border-bottom: 0.4rem solid var(--blue);
    font-size: 4rem;
  }

  h3 {
    margin-top: 2rem;
    color: var(--green);
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  .about-image {
    text-align: center;
    img {
      width: 100%;
      max-height: 550px;
      filter: grayscale(1);
      border-radius: 50%;
      transition: filter 0.5s;
      &:hover {
        filter: grayscale(0);
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
    }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .about-image {
      display: flex;
    }
    .hard-skills {
      justify-content: center;
    }
  }
`;
