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

  > ${Cell} {
    opacity: 0;
    animation-direction: alternate;
  }

  ${Cell}:nth-child(1) {
    font-family: Barriecito;
    animation: ${opacity} 2.2s ease-in-out 1;
  }

  ${Cell}:nth-child(4) {
    font-family: Courgette;
    animation: ${opacity} 0.9s ease-in-out 1;
    animation-delay: 0.2s;
  }

  ${Cell}:nth-child(7) {
    font-family: DancingScript;
    animation: ${opacity} 0.9s ease-in-out 1;
    animation-delay: 0.4s;
  }

  ${Cell}:nth-child(2) {
    font-family: DancingScript;
    animation: ${opacity} 0.9s ease-in-out 1;
    animation-delay: 0.6s;
  }

  ${Cell}:nth-child(3) {
    font-family: DancingScript;
    animation: ${opacity} 0.9s ease-in-out 1;
    animation-delay: 0.8s;
  }

  ${Cell}:nth-child(5) {
    font-family: Barriecito;
    animation: ${opacity} 0.9s ease-in-out 1;
    animation-delay: 1s;
  }

  ${Cell}:nth-child(9) {
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
