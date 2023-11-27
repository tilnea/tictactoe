import { styled } from "styled-components";
import { Cell } from "./cell";
import { Icon } from "./icon";
import { Player } from "../shared/variables";
import { PlayerType } from "../shared/types";

interface BoardProps {
  gameState: PlayerType[];
  onCellClick: (index: number) => void;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 86px);
  grid-template-rows: repeat(3, 86px);
  gap: 10px;
`;

export const Board = ({ gameState, onCellClick }: BoardProps) => {
  return (
    <Wrapper>
      {gameState.map((cell, index) => {
        let content = <div />;

        if (cell !== Player.NO) {
          content = <Icon id={cell} size={60} />;
        }

        return (
          <Cell
            onClick={() => onCellClick(index)}
            key={index}
            $clicked={cell !== Player.NO}
          >
            {content}
          </Cell>
        );
      })}
    </Wrapper>
  );
};
