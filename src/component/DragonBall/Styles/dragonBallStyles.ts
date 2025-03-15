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
  font-size: 4rem;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  background: linear-gradient(45deg, #ff8000, #ffcc00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-20%) scale(0.9);
  white-space: nowrap;

  opacity: 0;
  transition: opacity 0.4s ease, transform 0.4s ease;

  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  transform: perspective(300px) rotateX(15deg);

  @media (prefers-color-scheme: dark) {
    text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.2);
  }

  pointer-events: none; 
  .hover-parent:hover > a + & {
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
`;