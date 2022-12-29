import styled from "styled-components";
import fondo from "../../../assets/images/footer-bg.jpg";

export const SectionFooter = styled.footer`
  min-height: auto;
  padding-top: 2rem;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url(${fondo});
  background-size: cover;
  background-position: center;
`;

export const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  margin: 2rem;
  flex: 1 1 25rem;

  img {
    height: 4rem;
  }

  p {
    font-size: 1.5rem;
    color: #999;
    padding: 1rem 0;
  }

  h3 {
    font-size: 2.5rem;
    color: var(--green);
    padding: 1rem 0;
  }
`;

export const Icon = styled.div`
  padding-right: 1rem;
  color: var(--green);
  font-size: 1.5rem;
  padding: 1rem 0;
`;

export const Link = styled.a`
  height: 5rem;
  width: 5rem;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  line-height: 5rem;
  text-align: center;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  font-size: 2.5rem;
  color: #aaa;
  margin: 0.1rem;
  &:hover {
    background: #999;
    color: #fff;
  }
`;

export const Credit = styled.h1`
  padding: 2rem 1rem;
  text-align: center;
  font-size: 2rem;
  color: #999;
  border-top: 0.1rem solid rgba(0, 0, 0, 0.1);

  span {
    color: var(--green);
  }
`;
