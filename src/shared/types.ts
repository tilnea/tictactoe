import { Player, Direction } from "./variables";

export type PlayerType = Player.X | Player.O | Player.NO;

export type DirectionType =
  | Direction.ROW
  | Direction.COLUMN
  | Direction.DIAGONAL
  | Direction.ANTI_DIAGONAL;

export type WinnerType =
  | { direction: DirectionType; where: number }
  | undefined;
