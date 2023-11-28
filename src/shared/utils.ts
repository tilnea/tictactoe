import { PlayerType } from "./types";

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
  if (isSame(gameStatus[currentRow], player)) return true;

  //check column
  const columnArray = getColumn(gameStatus, currentColumn);
  if (isSame(columnArray, player)) return true;

  //check diagonal
  if (isDiagonalCell(currentRow, currentColumn)) {
    if (currentColumn === currentRow) {
      const diagonalArray = getDiagonal(gameStatus);
      if (isSame(diagonalArray, player)) return true;
    }

    const antiDiagonal = getAntiDiagonal(gameStatus);
    return isSame(antiDiagonal, player);
  }

  return false;
};
