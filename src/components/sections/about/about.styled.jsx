import styled from "styled-components";

export const SectionAbout = styled.section``;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 80vh;
`;

export const Image = styled.div`
  flex: 1 1 40rem;
  img {
    width: 100%;
  }
`;

export const Content = styled.div`
  flex: 1 1 40rem;

  h3 {
    color: var(--green);
    font-size: 2.5rem;
  }

  p {
    color: #aaa;
    font-size: 1.7rem;
    padding: 1rem 0;
  }
`;

export const Link = styled.a``;
