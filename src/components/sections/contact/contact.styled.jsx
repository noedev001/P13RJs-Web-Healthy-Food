import styled from "styled-components";

export const SectionContact = styled.section`
  padding-bottom: 3rem;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 2rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  box-shadow: 0 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  height: 80vh;
`;

export const Image = styled.div`
  flex: 1 1 40rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Formulario = styled.form`
  flex: 1 1 40rem;
  padding: 2rem 4rem;

  h3 {
    color: var(--green);
    padding: 0.5rem 0;
    font-size: 2rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 1.5rem;
    font-size: 1.5rem;
    border: 0.1rem solid rgba(0, 0, 0, 0.1);
  }

  textarea {
    resize: none;
    height: 15rem;
  }
`;

export const InputBox = styled.div`
  padding: 1rem 0;
`;

export const Btn = styled.input``;
