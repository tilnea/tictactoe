import { useState } from "react";
import { styled } from "styled-components";
import { Background } from "../components/background";
import { Board } from "../components/board";
import { Button } from "../components/button";
import { Icon } from "../components/icon";
import { Player } from "../shared/variables";
import { PlayerType } from "../shared/types";

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
  const [gameState, setGameState] = useState<PlayerType[]>(
    Array(9).fill(Player.NO)
  );
  const [player, setPlayer] = useState<PlayerType>(Player.NO);

  const handleStartGame = () => {
    if (player === Player.NO) {
      setPlayer(Player.X);
    } else {
      setGameState(Array(9).fill(Player.NO));
      setPlayer(Player.NO);
    }
  };

  const handleCellClick = (cellIndex: number) => {
    if (player === Player.NO) return;
    if (gameState[cellIndex] !== Player.NO) return;

    const newGameState = [...gameState];

    newGameState[cellIndex] = player === Player.X ? Player.X : Player.O;
    setGameState(newGameState);
    setPlayer(player === Player.X ? Player.O : Player.X);
  };

  return (
    <Background $player={player}>
      <Layout>
        {player === Player.NO ? (
          <div>
            <Icon id={Player.X} size={86} />
            <Icon id={Player.O} size={86} />
          </div>
        ) : (
          <Icon id={player} size={86} />
        )}
        <Board gameState={gameState} onCellClick={handleCellClick} />
        <Button onClick={handleStartGame}>
          {player === Player.NO ? "Play" : "Reset"}
        </Button>
      </Layout>
    </Background>
  );
};
