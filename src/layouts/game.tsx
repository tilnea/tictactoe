import { useState } from "react";
import { styled } from "styled-components";
import { Background } from "../components/background";
import { Board } from "../components/board";
import { Button } from "../components/button";
import { Icon } from "../components/icon";
import { Player } from "../shared/variables";
import { PlayerType, WinnerType } from "../shared/types";
import { checkForVictory } from "../shared/utils";

const Layout = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const Game = () => {
  const EMPTY_STATE = [
    Array(3).fill(Player.NO),
    Array(3).fill(Player.NO),
    Array(3).fill(Player.NO),
  ];
  const [board, setBoard] = useState<PlayerType[][]>(EMPTY_STATE);
  const [player, setPlayer] = useState<PlayerType>(Player.NO);
  const [winningInfo, setWinningInfo] = useState<WinnerType>(undefined);

  const handleStartGame = () => {
    if (player === Player.NO) {
      setPlayer(Player.X);
    } else {
      setBoard(EMPTY_STATE);
      setWinningInfo(undefined);
      setPlayer(Player.NO);
    }
  };

  const handleCellClick = (row: number, column: number) => {
    if (winningInfo !== undefined) return;
    if (player === Player.NO) {
      handleStartGame();
      return;
    }

    if (board[row][column] !== Player.NO) return;

    const newboard = [...board];
    newboard[row][column] = player === Player.X ? Player.X : Player.O;
    setBoard(newboard);

    if (checkForVictory(row, column, board, player)) {
      setWinningInfo(checkForVictory(row, column, board, player));
    } else {
      setPlayer(player === Player.X ? Player.O : Player.X);
    }
  };

  return (
    <Background $player={player}>
      <Layout>
        <div>
          {player !== Player.O && <Icon id={Player.X} size={86} />}
          {player !== Player.X && <Icon id={Player.O} size={86} />}
        </div>

        <Board
          winningInfo={winningInfo}
          board={board}
          onCellClick={handleCellClick}
        />
        <Button onClick={handleStartGame}>
          {player === Player.NO
            ? "Play"
            : winningInfo === undefined
            ? "Reset"
            : "Play again"}
        </Button>
      </Layout>
    </Background>
  );
};
