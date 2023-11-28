import { styled, keyframes } from "styled-components";
import { Direction } from "../shared/variables";
import { DirectionType } from "../shared/types";

interface WinProps {
  number: number;
  direction: DirectionType;
}

const opacity = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const WinCell = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background: white;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${opacity} 2s ease-in-out infinite;
  animation-direction: alternate;
`;

const handleRainbowDirection = (direction: DirectionType) => {
  switch (direction) {
    case Direction.ROW:
      return 0;
    case Direction.COLUMN:
      return 90;
    case Direction.DIAGONAL:
      return 45;
    case Direction.ANTI_DIAGONAL:
      return -45;
    default:
      return 0;
  }
};

interface WinTextprops {
  $direction: DirectionType;
}

const WinText = styled.div<WinTextprops>`
  padding-top: 16px;
  font-family: "BalooTamma2";
  font-size: 64px;

  background: linear-gradient(
    ${({ $direction }) => handleRainbowDirection($direction)}deg,
    #ef3c3c 0%,
    #f08e47 15.1%,
    #f1e367 30.73%,
    #a3deba 45.31%,
    #34add3 61.46%,
    #9747ff 76.04%,
    #ad00ff 85.94%,
    #f6a0f3 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Win = ({ number, direction }: WinProps) => {
  return (
    <WinCell>
      <WinText $direction={direction}>
        {number === 1 ? "W" : number === 2 ? "I" : "N"}
      </WinText>
    </WinCell>
  );
};
