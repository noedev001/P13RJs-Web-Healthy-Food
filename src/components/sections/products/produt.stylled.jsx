import styled from "styled-components";

export const SectionProduct = styled.section``;

export const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 2rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: #fff;
  width: 30rem;
  text-align: center;

  img {
    height: 20rem;
    width: 20rem;
    object-fit: cover;
  }

  h3 {
    font-size: 2rem;
    color: var(--green);
  }
`;

export const Start = styled.div`
  font-size: 2rem;
  color: gold;
  padding: 1rem 0.1rem;
`;

export const Price = styled.div`
  font-size: 2rem;
  color: #666;

  span {
    font-size: 1.5rem;
    color: #aaa;
    padding-right: 0.5rem;
    text-decoration: line-through;
  }
`;

export const Icons = styled.div`
  padding: 1rem 0;
`;

export const Link = styled.a`
  font-size: 1.5rem;
  color: #666;
  height: 5rem;
  width: 5rem;
  line-height: 5rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  margin: 0.5rem;
  padding: 1rem;

  &:hover {
    background: #eee;
  }
`;
