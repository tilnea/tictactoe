import { useState } from "react";
import { styled } from "styled-components";
import { Background } from "../components/background";
import { Board } from "../components/board";
import { Button } from "../components/button";
import { Icon } from "../components/icon";
import { Player } from "../shared/variables";
import { PlayerType } from "../shared/types";
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
  const [gameState, setGameState] = useState<PlayerType[][]>(EMPTY_STATE);

  const [player, setPlayer] = useState<PlayerType>(Player.NO);

  const handleStartGame = () => {
    if (player === Player.NO) {
      setPlayer(Player.X);
    } else {
      setGameState(EMPTY_STATE);
      setPlayer(Player.NO);
    }
  };

  const handleCellClick = (row: number, column: number) => {
    if (player === Player.NO) return;
    if (gameState[row][column] !== Player.NO) return;

    const newGameState = [...gameState];
    newGameState[row][column] = player === Player.X ? Player.X : Player.O;
    setGameState(newGameState);

    if (checkForVictory(row, column, gameState, player)) {
      console.log("player", player, "wins");
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

        <Board gameState={gameState} onCellClick={handleCellClick} />
        <Button onClick={handleStartGame}>
          {player === Player.NO ? "Play" : "Reset"}
        </Button>
      </Layout>
    </Background>
  );
};
