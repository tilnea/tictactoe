import { PlayerType } from "./types";
import { Player, Direction } from "./variables";

const getColumn = (matrix: PlayerType[][], column: number) => {
  return matrix.map((row) => row[column]);
};

const getDiagonal = (matrix: PlayerType[][]) => {
  return matrix.map((row, i) => row[i]);
};

const getAntiDiagonal = (matrix: PlayerType[][]) => {
  return matrix.map((row, i) => row[2 - i]);
};

const isDiagonalCell = (row: number, column: number) => {
  const sum = row + column;
  return sum % 2 == 0;
};

const isSame = (array: PlayerType[], player: PlayerType) => {
  return array.filter((cell) => cell === player).length === 3;
};

export const checkForVictory = (
  currentRow: number,
  currentColumn: number,
  gameStatus: PlayerType[][],
  player: PlayerType
) => {
  //check row
  if (player === Player.NO) return undefined;
  if (isSame(gameStatus[currentRow], player))
    //return { row: currentRow, column: 0 };
    return { direction: Direction.ROW, where: currentRow };

  //check column
  const columnArray = getColumn(gameStatus, currentColumn);
  if (isSame(columnArray, player))
    //return { row: 0, column: currentColumn };
    return { direction: Direction.COLUMN, where: currentColumn };

  //check diagonal
  if (isDiagonalCell(currentRow, currentColumn)) {
    if (currentColumn === currentRow) {
      const diagonalArray = getDiagonal(gameStatus);
      if (isSame(diagonalArray, player))
        return { direction: Direction.DIAGONAL, where: 0 };
    }

    const antiDiagonal = getAntiDiagonal(gameStatus);
    if (isSame(antiDiagonal, player))
      return { direction: Direction.ANTI_DIAGONAL, where: 2 };
  }

  return undefined;
};
