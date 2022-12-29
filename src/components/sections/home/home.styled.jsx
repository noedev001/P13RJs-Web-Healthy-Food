import styled from "styled-components";
import img from "../../../assets/images/home-bg.jpg";

export const SectionHome = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: url(${img}) no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 788px) {
    padding: 0 3%;
    padding-top: 9rem;

    background: linear-gradient(
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ),
      url(${img}) no-repeat;
    background-position: left;
    transition: 0.5s;
  }
`;

export const Content = styled.div`
  padding-left: 10rem;
  width: 75rem;

  h3 {
    font-size: 4.5rem;
    color: var(--green);
  }

  p {
    font-size: 2rem;
    color: #aaa;
    padding: 1rem 0;
  }

  @media (max-width: 991px) {
    padding: 0;
  }

  @media (max-width: 788px) {
    width: auto;
  }
`;

export const Link = styled.a``;

export const Btn = styled.button``;
