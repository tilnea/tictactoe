import { describe, it, expect } from "vitest";
import {
  isDiagonalCell,
  getColumn,
  getDiagonal,
  getAntiDiagonal,
  isSame,
  isWinningCell,
  checkForVictory,
} from "./utils";
import { Direction, Player } from "./variables";

describe("Cheking if diagonal cell ", () => {
  it("should return true if cell is diagonal", () => {
    expect(isDiagonalCell(0, 0)).toBe(true);
    expect(isDiagonalCell(0, 2)).toBe(true);
    expect(isDiagonalCell(1, 1)).toBe(true);
    expect(isDiagonalCell(2, 0)).toBe(true);
    expect(isDiagonalCell(2, 2)).toBe(true);
  });

  it("should return false if cell is not diagonal", () => {
    expect(isDiagonalCell(0, 1)).toBe(false);
    expect(isDiagonalCell(1, 0)).toBe(false);
    expect(isDiagonalCell(1, 2)).toBe(false);
    expect(isDiagonalCell(2, 1)).toBe(false);
  });
});

describe("Getting a column ", () => {
  const matrix = [
    [Player.NO, Player.X, Player.O],
    [Player.NO, Player.X, Player.O],
    [Player.NO, Player.X, Player.O],
  ];

  it("should return an array with the column values", () => {
    expect(getColumn(matrix, 0)).toStrictEqual([
      Player.NO,
      Player.NO,
      Player.NO,
    ]);
    expect(getColumn(matrix, 1)).toStrictEqual([Player.X, Player.X, Player.X]);
    expect(getColumn(matrix, 2)).toStrictEqual([Player.O, Player.O, Player.O]);
  });
});

describe("Getting the diagonal ", () => {
  const matrix = [
    [Player.NO, Player.X, Player.O],
    [Player.NO, Player.X, Player.O],
    [Player.NO, Player.X, Player.O],
  ];

  it("should return an array with the diagonal values", () => {
    expect(getDiagonal(matrix)).toStrictEqual([Player.NO, Player.X, Player.O]);
  });
});

describe("Getting the anti-diagonal ", () => {
  const matrix = [
    [Player.NO, Player.X, Player.O],
    [Player.NO, Player.X, Player.O],
    [Player.NO, Player.X, Player.O],
  ];

  it("should return an array with the diagonal values", () => {
    expect(getAntiDiagonal(matrix)).toStrictEqual([
      Player.O,
      Player.X,
      Player.NO,
    ]);
  });
});

describe("Checking if same ", () => {
  const mix = [Player.NO, Player.X, Player.O];
  const same = [Player.X, Player.X, Player.X];

  it("should return true if all values are the same as the player", () => {
    expect(isSame(same, Player.X)).toBe(true);
  });

  it("should return false vales differ from the player", () => {
    expect(isSame(mix, Player.X)).toBe(false);
    expect(isSame(same, Player.O)).toBe(false);
  });
});

describe("Checking if a Cell is in the winning array", () => {
  it("should return true if cell is in a winning row", () => {
    // first row
    expect(isWinningCell(Direction.ROW, 0, 0, 0)).toBe(true);
    expect(isWinningCell(Direction.ROW, 0, 0, 1)).toBe(true);
    expect(isWinningCell(Direction.ROW, 0, 0, 2)).toBe(true);

    // second row
    expect(isWinningCell(Direction.ROW, 1, 1, 0)).toBe(true);
    expect(isWinningCell(Direction.ROW, 1, 1, 1)).toBe(true);
    expect(isWinningCell(Direction.ROW, 1, 1, 2)).toBe(true);

    // third row
    expect(isWinningCell(Direction.ROW, 2, 2, 0)).toBe(true);
    expect(isWinningCell(Direction.ROW, 2, 2, 1)).toBe(true);
    expect(isWinningCell(Direction.ROW, 2, 2, 2)).toBe(true);
  });

  it("should false if cell is not in a winning row", () => {
    expect(isWinningCell(Direction.ROW, 0, 1, 0)).toBe(false);
    expect(isWinningCell(Direction.ROW, 0, 2, 1)).toBe(false);
    expect(isWinningCell(Direction.ROW, 1, 0, 2)).toBe(false);
    expect(isWinningCell(Direction.ROW, 2, 0, 2)).toBe(false);
  });

  it("should return true if cell is in a winning column", () => {
    // first column
    expect(isWinningCell(Direction.COLUMN, 0, 0, 0)).toBe(true);
    expect(isWinningCell(Direction.COLUMN, 0, 1, 0)).toBe(true);
    expect(isWinningCell(Direction.COLUMN, 0, 2, 0)).toBe(true);

    // second column
    expect(isWinningCell(Direction.COLUMN, 1, 0, 1)).toBe(true);
    expect(isWinningCell(Direction.COLUMN, 1, 1, 1)).toBe(true);
    expect(isWinningCell(Direction.COLUMN, 1, 2, 1)).toBe(true);

    // third column
    expect(isWinningCell(Direction.COLUMN, 2, 0, 2)).toBe(true);
    expect(isWinningCell(Direction.COLUMN, 2, 1, 2)).toBe(true);
    expect(isWinningCell(Direction.COLUMN, 2, 2, 2)).toBe(true);
  });

  it("should false if cell is not in a winning column", () => {
    expect(isWinningCell(Direction.COLUMN, 0, 1, 1)).toBe(false);
    expect(isWinningCell(Direction.COLUMN, 0, 2, 1)).toBe(false);
    expect(isWinningCell(Direction.COLUMN, 1, 0, 2)).toBe(false);
    expect(isWinningCell(Direction.COLUMN, 2, 0, 0)).toBe(false);
  });

  it("should return true if cell is in a winning diagonal", () => {
    expect(isWinningCell(Direction.DIAGONAL, 0, 0, 0)).toBe(true);
    expect(isWinningCell(Direction.DIAGONAL, 0, 1, 1)).toBe(true);
    expect(isWinningCell(Direction.DIAGONAL, 0, 2, 2)).toBe(true);
  });

  it("should false if cell is not in a winning diagonal", () => {
    expect(isWinningCell(Direction.DIAGONAL, 0, 1, 0)).toBe(false);
    expect(isWinningCell(Direction.DIAGONAL, 0, 2, 1)).toBe(false);
    expect(isWinningCell(Direction.DIAGONAL, 0, 0, 2)).toBe(false);
    expect(isWinningCell(Direction.DIAGONAL, 0, 0, 1)).toBe(false);
  });

  it("should return true if cell is in a winning anti-diagonal", () => {
    expect(isWinningCell(Direction.ANTI_DIAGONAL, 2, 0, 2)).toBe(true);
    expect(isWinningCell(Direction.ANTI_DIAGONAL, 2, 1, 1)).toBe(true);
    expect(isWinningCell(Direction.ANTI_DIAGONAL, 2, 2, 0)).toBe(true);
  });

  it("should false if cell is not in a winning anti-diagonal", () => {
    expect(isWinningCell(Direction.ANTI_DIAGONAL, 2, 1, 0)).toBe(false);
    expect(isWinningCell(Direction.ANTI_DIAGONAL, 2, 2, 1)).toBe(false);
    expect(isWinningCell(Direction.ANTI_DIAGONAL, 2, 2, 2)).toBe(false);
    expect(isWinningCell(Direction.ANTI_DIAGONAL, 2, 0, 1)).toBe(false);
  });
});

describe("Checking for victory", () => {
  const matrix1 = [
    [Player.O, Player.NO, Player.O],
    [Player.O, Player.O, Player.O],
    [Player.NO, Player.X, Player.O],
  ];

  const matrix2 = [
    [Player.O, Player.NO, Player.X],
    [Player.O, Player.X, Player.O],
    [Player.X, Player.X, Player.O],
  ];

  it("should return a diagonal cirection and start coordinate if there is a victory in that coordinate for the given player", () => {
    expect(checkForVictory(2, 2, matrix1, Player.O)).toStrictEqual({
      direction: Direction.COLUMN,
      where: 2,
    });

    expect(checkForVictory(1, 2, matrix1, Player.O)).toStrictEqual({
      direction: Direction.ROW,
      where: 1,
    });

    expect(checkForVictory(0, 0, matrix1, Player.O)).toStrictEqual({
      direction: Direction.DIAGONAL,
      where: 0,
    });

    expect(checkForVictory(0, 0, matrix2, Player.X)).toStrictEqual({
      direction: Direction.ANTI_DIAGONAL,
      where: 2,
    });
  });

  it("should return undefined if there is no victory in that coordinate for the given player", () => {
    expect(checkForVictory(0, 1, matrix1, Player.X)).toStrictEqual(undefined);
    expect(checkForVictory(2, 1, matrix1, Player.X)).toStrictEqual(undefined);
    expect(checkForVictory(0, 1, matrix1, Player.O)).toStrictEqual(undefined);
    expect(checkForVictory(2, 1, matrix2, Player.X)).toStrictEqual(undefined);
  });
});
