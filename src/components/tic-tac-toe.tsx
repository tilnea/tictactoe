import { styled, keyframes } from "styled-components";

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

const FakeCell = styled.div`
  height: 100;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 86px);
  grid-template-rows: repeat(3, 86px);
  gap: 10px;
  font-size: 64px;
  color: #000;

  > ${FakeCell} {
    opacity: 0;
    animation: ${opacity} 0.9s ease-in-out 1 forwards;
  }

  ${FakeCell}:nth-child(1) {
    font-family: Barriecito;
  }

  ${FakeCell}:nth-child(2) {
    font-family: DancingScript;
    animation-delay: 0.2s;
  }

  ${FakeCell}:nth-child(3) {
    font-family: DancingScript;
    animation-delay: 0.4s;
  }

  ${FakeCell}:nth-child(4) {
    font-family: Courgette;
    animation-delay: 0.6s;
  }

  ${FakeCell}:nth-child(5) {
    font-family: Barriecito;
    animation-delay: 0.8s;
  }

  ${FakeCell}:nth-child(6) {
    font-family: Courgette;
    animation-delay: 1s;
  }

  ${FakeCell}:nth-child(7) {
    font-family: DancingScript;
    animation-delay: 1.2s;
  }

  ${FakeCell}:nth-child(8) {
    font-family: Courgette;
    animation-delay: 1.4s;
  }

  ${FakeCell}:nth-child(9) {
    font-family: Barriecito;
    animation-delay: 1.6s;
  }
`;

export const TicTacToe = () => {
  return (
    <Wrapper>
      <FakeCell>T</FakeCell>
      <FakeCell>i</FakeCell>
      <FakeCell>c</FakeCell>
      <FakeCell>T</FakeCell>
      <FakeCell>a</FakeCell>
      <FakeCell>c</FakeCell>
      <FakeCell>T</FakeCell>
      <FakeCell>o</FakeCell>
      <FakeCell>e</FakeCell>
    </Wrapper>
  );
};
