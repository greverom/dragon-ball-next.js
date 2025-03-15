import styled from "styled-components";

export const Title = styled.h1`
  font-size: 3rem;
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
    font-size: 1.5rem; 
  }
`;

export const HoverTitle = styled.div`
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  background: linear-gradient(45deg, #ff8000, #ffcc00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  position: absolute;
  top: calc(100% + 20px);
  left: 20%;
  transform: scale(0.5);
  white-space: nowrap;

  opacity: 0;
  transition: opacity 0.4s ease, transform 0.4s ease;

  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

  @media (prefers-color-scheme: dark) {
    text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.5);
  }

  pointer-events: none; 
  .hover-parent:hover > a + & {
    opacity: 1;
    transform: scale(1)
  }
`;

export const HoverImageContainer = styled.div`
  position: absolute;
  top: 550%; 
  left: 50%; 
  transform: translate(80%, 0) scale(2.5);
  opacity: 0;
  transition: opacity 0.4s ease, transform 0.4s ease;
  pointer-events: none;
  background: transparent;

  .hover-parent:hover & {
    opacity: 1;
    transform: translate(80%, 0) scale(3); 
  }
`;