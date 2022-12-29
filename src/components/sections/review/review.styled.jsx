import styled from "styled-components";

export const SectionReview = styled.section``;

export const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 80vh;
`;

export const Box = styled.div`
  margin: 2rem;
  padding: 1rem;
  flex: 1 1 35rem;

  p {
    font-size: 1.5rem;
    color: #999;
  }
`;

export const Info = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;

  img {
    height: 7rem;
    width: 7rem;
    object-fit: cover;
    border: 0.5rem solid var(--green);
    border-radius: 50%;
  }
`;

export const User = styled.div`
  padding-left: 1rem;

  h3 {
    font-size: 2rem;
    color: var(--green);
  }

  span {
    font-size: 1.5rem;
    color: #666;
  }
`;
