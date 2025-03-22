import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
   background: linear-gradient(3deg, #ff8000, #ffcc00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::before {
    content: attr(data-text);
    position: absolute;
    left: 3px;
    top: 3px;
    color: black;
    z-index: -1;
  }

   @media (max-width: 768px) {
    font-size: 2rem; 
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; 
  }
`;
