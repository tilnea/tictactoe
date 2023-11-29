import { styled, keyframes } from "styled-components";

const opacity = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const FakeCell = styled.div`
  height: 100;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 64px;
  color: #000;

  opacity: 0;
  animation: ${opacity} 0.9s ease-in-out 1 forwards;

  div & :nth-child(1) {
    font-family: Barriecito;
  }

  div &:nth-child(2) {
    font-family: DancingScript;
    animation-delay: 0.2s;
  }

  div &:nth-child(3) {
    font-family: DancingScript;
    animation-delay: 0.4s;
  }

  div &:nth-child(4) {
    font-family: Courgette;
    animation-delay: 0.6s;
  }

  div &:nth-child(5) {
    font-family: Barriecito;
    animation-delay: 0.8s;
  }

  div &:nth-child(6) {
    font-family: Courgette;
    animation-delay: 1s;
  }

  div &:nth-child(7) {
    font-family: DancingScript;
    animation-delay: 1.2s;
  }

  div &:nth-child(8) {
    font-family: Courgette;
    animation-delay: 1.4s;
  }

  div &:nth-child(9) {
    font-family: Barriecito;
    animation-delay: 1.6s;
  }
`;

export const TicTacToe = () => {
  return (
    <>
      <FakeCell>T</FakeCell>
      <FakeCell>i</FakeCell>
      <FakeCell>c</FakeCell>
      <FakeCell>T</FakeCell>
      <FakeCell>a</FakeCell>
      <FakeCell>c</FakeCell>
      <FakeCell>T</FakeCell>
      <FakeCell>o</FakeCell>
      <FakeCell>e</FakeCell>
    </>
  );
};
