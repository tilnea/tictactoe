import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { Background } from "../components/background";
import { Board } from "../components/board";
import { Button } from "../components/button";
import { CurrentPlayer } from "../components/current-player";
import { Scoreboard } from "../components/scoreboard";
import { Player, GameStatus } from "../shared/variables";
import { PlayerType, WinnerType } from "../shared/types";
import { checkForVictory } from "../shared/utils";

const Content = styled.div`
  height: 100%;
  max-height: 915px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GameLayout = styled.div`
  flex: 1 1 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const ScoreboardLayout = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
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
  const [score, setScore] = useState({ x: 0, o: 0, tie: 0 });
  const [turn, setTurn] = useState(1);
  const [restartGame, setRestartGame] = useState(false);

  useEffect(() => {
    if (restartGame) {
      const timer = setTimeout(() => {
        setRestartGame(false);
        setGameStatus(GameStatus.PLAY);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [restartGame]);

  const handleStartGame = () => {
    if (gameStatus === GameStatus.START) {
      setPlayer(Player.X);
      setGameStatus(GameStatus.PLAY);
    } else if (gameStatus === GameStatus.PLAY) {
      setBoard(EMPTY_STATE);
      setTurn(1);
      setRestartGame(true);
    } else if (gameStatus === GameStatus.FINISH) {
      setBoard(EMPTY_STATE);
      setTurn(1);
      setWinningInfo(undefined);
      setPlayer(player === Player.X ? Player.O : Player.X);
      setRestartGame(true);
    }
    setGameStatus(GameStatus.PLAY);
  };

  const handleCellClick = (row: number, column: number) => {
    if (player === Player.NO) return;
    if (gameStatus === GameStatus.FINISH) return;
    if (board[row][column] !== Player.NO) return;

    setTurn(turn + 1);

    const newboard = [...board];
    newboard[row][column] = player === Player.X ? Player.X : Player.O;
    setBoard(newboard);

    const victoryInfo = checkForVictory(row, column, board, player);
    if (victoryInfo) {
      setWinningInfo(victoryInfo);
      setGameStatus(GameStatus.FINISH);

      player === Player.X
        ? setScore({ ...score, x: score.x + 1 })
        : setScore({ ...score, o: score.o + 1 });
    } else {
      if (turn === 9) {
        // It's a tie
        setGameStatus(GameStatus.FINISH);
        setScore({ ...score, tie: score.tie + 1 });
      } else {
        setPlayer(player === Player.X ? Player.O : Player.X);
      }
    }
  };

  return (
    <Background
      showOnlyX={
        player === Player.X &&
        (gameStatus === GameStatus.PLAY ||
          (gameStatus === GameStatus.FINISH && winningInfo !== undefined))
      }
      showOnlyO={
        player === Player.O &&
        (gameStatus === GameStatus.PLAY ||
          (gameStatus === GameStatus.FINISH && winningInfo !== undefined))
      }
    >
      <Content>
        <GameLayout>
          <CurrentPlayer
            showX={player === Player.X && gameStatus === GameStatus.PLAY}
            showO={player === Player.O && gameStatus === GameStatus.PLAY}
          />

          <Board
            winningInfo={winningInfo}
            board={board}
            onCellClick={handleCellClick}
            itsATie={!winningInfo && gameStatus === GameStatus.FINISH}
            showTicTacToe={restartGame || gameStatus === GameStatus.START}
          />
          <Button onClick={handleStartGame}>
            {gameStatus === GameStatus.START && "Play"}
            {gameStatus === GameStatus.PLAY && "Reset game"}
            {gameStatus === GameStatus.FINISH && "Play again"}
          </Button>
        </GameLayout>
        <ScoreboardLayout>
          <Scoreboard score={score} />
        </ScoreboardLayout>
      </Content>
    </Background>
  );
};
