import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 7%;
  background: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  @media (max-width: 788px) {
    padding: 2rem 3%;
  }
`;

export const Logo = styled.a`
  img {
    height: 4rem;
  }
`;

export const Menu = styled.div`
  font-size: 2.5rem;
  color: #666;
  cursor: pointer;
  padding: 0.4rem 1rem 0.2rem 1rem;
  border: 0.2rem solid rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  display: none;
  /* color: ${(props) => (props.cerrar === false ? "red" : "yellow")}; */

  @media (max-width: 788px) {
    display: block;
  }
`;

export const Navbar = styled.nav`
  @media (max-width: 788px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #f9f9f9;
    text-align: center;
    padding: 2rem 0;
    border-top: 0.1rem solid rgba(0, 0, 0, 0.1);
    transform-origin: top;
    transform: ${({ cerrar }) =>
      cerrar === false ? "scaleY(0)" : "scaleY(1)"};

    opacity: ${({ cerrar }) => (cerrar === false ? "0" : "1")};
  }
`;

export const Link = styled.a`
  font-size: 2rem;
  color: #aaa;
  margin-left: 3rem;

  &:hover {
    color: var(--green);
  }

  @media (max-width: 788px) {
    display: block;
    padding: 1rem 0;
    margin: 1rem 0;
    font-size: 2.5rem;
  }
`;
