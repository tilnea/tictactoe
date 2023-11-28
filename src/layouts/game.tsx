import { useState } from "react";
import { styled } from "styled-components";
import { Background } from "../components/background";
import { Board } from "../components/board";
import { Button } from "../components/button";
import { Icon } from "../components/icon";
import { Player, GameStatus } from "../shared/variables";
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

  const [gameStatus, setGameStatus] = useState(GameStatus.START);
  const [board, setBoard] = useState<PlayerType[][]>(EMPTY_STATE);
  const [player, setPlayer] = useState<PlayerType>(Player.NO);
  const [winningInfo, setWinningInfo] = useState<WinnerType>(undefined);

  const handleStartGame = () => {
    if (gameStatus === GameStatus.START) {
      setPlayer(Player.X);
    } else if (gameStatus === GameStatus.PLAY) {
      setBoard(EMPTY_STATE);
    } else if (gameStatus === GameStatus.FINISH) {
      setBoard(EMPTY_STATE);
      setWinningInfo(undefined);
      setPlayer(player === Player.X ? Player.O : Player.X);
    }

    setGameStatus(GameStatus.PLAY);
  };

  const handleCellClick = (row: number, column: number) => {
    if (gameStatus === GameStatus.FINISH) return;
    if (player === Player.NO) {
      handleStartGame();
      return;
    }

    if (board[row][column] !== Player.NO) return;

    const newboard = [...board];
    newboard[row][column] = player === Player.X ? Player.X : Player.O;
    setBoard(newboard);

    const victoryInfo = checkForVictory(row, column, board, player);
    if (victoryInfo) {
      setWinningInfo(victoryInfo);
      setGameStatus(GameStatus.FINISH);
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
          {gameStatus === GameStatus.START && "Play"}
          {gameStatus === GameStatus.PLAY && "Reset game"}
          {gameStatus === GameStatus.FINISH && "Play again"}
        </Button>
      </Layout>
    </Background>
  );
};
