import { styled, keyframes } from "styled-components";
import { Cell } from "./cell";

const opacity = keyframes`
  0% {
    opacity: 0;
  }

  5% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 86px);
  grid-template-rows: repeat(3, 86px);
  gap: 10px;
  font-size: 64px;
  color: #000;

  > span {
    opacity: 0;
    animation-direction: alternate;
  }

  :nth-child(1) {
    font-family: Barriecito;
    animation: ${opacity} 2.2s ease-in-out 1;
  }

  :nth-child(4) {
    font-family: Courgette;
    animation: ${opacity} 0.9s ease-in-out 1;
    animation-delay: 0.2s;
  }

  :nth-child(7) {
    font-family: DancingScript;
    animation: ${opacity} 0.9s ease-in-out 1;
    animation-delay: 0.4s;
  }

  :nth-child(2) {
    font-family: DancingScript;
    animation: ${opacity} 0.9s ease-in-out 1;
    animation-delay: 0.6s;
  }

  :nth-child(3) {
    font-family: DancingScript;
    animation: ${opacity} 0.9s ease-in-out 1;
    animation-delay: 0.8s;
  }

  :nth-child(5) {
    font-family: Barriecito;
    animation: ${opacity} 0.9s ease-in-out 1;
    animation-delay: 1s;
  }

  :nth-child(9) {
    font-family: Barriecito;
    animation: ${opacity} 0.9s ease-in-out 1;
    animation-delay: 1.2s;
  }
`;

export const Tie = () => {
  return (
    <Wrapper>
      <Cell>T</Cell>
      <Cell>i</Cell>
      <Cell>e</Cell>
      <Cell>i</Cell>
      <Cell>i</Cell>
      <Cell></Cell>
      <Cell>e</Cell>
      <Cell></Cell>
      <Cell>e</Cell>
    </Wrapper>
  );
};
