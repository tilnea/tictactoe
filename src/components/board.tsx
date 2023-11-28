import { styled } from "styled-components";
import { Cell } from "./cell";
import { Icon } from "./icon";
import { Win } from "./win";
import { isWinningCell } from "../shared/utils";
import { Player } from "../shared/variables";
import { PlayerType, WinnerType } from "../shared/types";

interface BoardProps {
  board: PlayerType[][];
  winningInfo: WinnerType;
  onCellClick: (row: number, column: number) => void;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 86px);
  grid-template-rows: repeat(3, 86px);
  gap: 10px;
`;

export const Board = ({ board, winningInfo, onCellClick }: BoardProps) => {
  let winCellNumber = 0;
  return (
    <Wrapper>
      {board.map((row, i) => {
        return row.map((cell, j) => {
          let content = <div />;

          if (cell !== Player.NO) {
            content = <Icon id={cell} size={60} />;
          }

          const winningCell =
            winningInfo &&
            isWinningCell(winningInfo.direction, winningInfo.where, i, j);

          winCellNumber = winningCell ? winCellNumber + 1 : winCellNumber;

          return (
            <Cell
              onClick={() => onCellClick(i, j)}
              key={`cell-${i}-${j}`}
              $clicked={cell !== Player.NO}
              $winner={winningCell}
            >
              {content}
              {winningCell && (
                <Win number={winCellNumber} direction={winningInfo.direction} />
              )}
            </Cell>
          );
        });
      })}
    </Wrapper>
  );
};
