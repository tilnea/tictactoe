import { styled } from "styled-components";
import { Cell } from "./cell";
import { Icon } from "./icon";
import { Player, Direction } from "../shared/variables";
import { PlayerType, WinnerType, DirectionType } from "../shared/types";

interface BoardProps {
  gameState: PlayerType[][];
  winnerArray: WinnerType;
  onCellClick: (row: number, column: number) => void;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 86px);
  grid-template-rows: repeat(3, 86px);
  gap: 10px;
`;

const isWinningCell = (
  winDirection: DirectionType,
  winStart: number,
  row: number,
  column: number
) => {
  switch (winDirection) {
    case Direction.ROW:
      return row === winStart;
    case Direction.COLUMN:
      return column === winStart;
    case Direction.DIAGONAL:
      return row === column;
    case Direction.ANTI_DIAGONAL:
      return row + column === winStart;
  }
};

export const Board = ({ gameState, winnerArray, onCellClick }: BoardProps) => {
  return (
    <Wrapper>
      {gameState.map((row, i) => {
        return row.map((cell, j) => {
          let content = <div />;

          if (cell !== Player.NO) {
            content = <Icon id={cell} size={60} />;
          }

          return (
            <Cell
              onClick={() => onCellClick(i, j)}
              key={`cell-${i}-${j}`}
              $clicked={cell !== Player.NO}
              $winner={
                winnerArray &&
                isWinningCell(winnerArray.direction, winnerArray.where, i, j)
              }
            >
              {content}
            </Cell>
          );
        });
      })}
    </Wrapper>
  );
};
