import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        text-decoration: none;
        text-transform: capitalize;
        transition: all 0.3s cubic-bezier(0.38,1.15,0.7,1.12);
        font-weight: normal;
        font-family: cursive;
    }

    :root{
        --green:#6e8a3c;
    }

    *::selection{
        background: var(--green);
        color: #fff;
    }

    html{
        font-size:62.5%;
        overflow-x: hidden;


        @media (max-width:991px){
            font-size:55%;
        }


        @media (max-width:400px){
            font-size:50%;
        }
    }

    html::-webkit-scrollbar{
        width: 1.3rem;
    }
    html::-webkit-scrollbar-track{
        background: #eee;
    }
    html::-webkit-scrollbar-thumb{
        background: var(--green);
    }

    section{
        padding: 0 7%;
        padding-top: 9rem;
        min-height: 100vh;
    }

    button{
        padding:0.7rem 2rem;
        font-size:1.7rem;
        background: #666;
        color: #fff;
        cursor:pointer;
        margin-top: 1rem;
        box-shadow: 0  0.5rem 1rem rgba(0,0,0,0.1);
    }

    button:hover{
        background: #444;
    }

    h1{
        text-align: center;
        padding: 1rem;
        color:var(--green);
        font-size:3.5rem;
    }
`;

export const ScrollTop = styled.a`
  position: fixed;
  bottom: 7.5rem;
  right: 2rem;
  z-index: 1000;
  height: 6rem;
  width: 6rem;
  line-height: 6rem;
  font-size: 3rem;
  text-align: center;
  color: var(--green);
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  background: #f9f9f9;
`;
