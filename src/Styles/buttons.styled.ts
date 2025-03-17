import styled from "styled-components";

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const DragonBallButton = styled(Button)`
  background-color: #ff8000; 
  color: white;

  &:hover {
    background-color: #ff6600;
  }
`;