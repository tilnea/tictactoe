import { useState } from "react";
import { styled } from "styled-components";
import { Background } from "../components/background";
import { Board } from "../components/board";
import { Player } from "../shared/variables";
import { PlayerType } from "../shared/types";

const Layout = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Game = () => {
  const [gameState, setGameState] = useState<PlayerType[]>(
    Array(9).fill(Player.NO)
  );
  const [player, setPlayer] = useState(Player.X);

  const handleCellClick = (cellIndex: number) => {
    if (gameState[cellIndex] !== Player.NO) return;

    const newGameState = [...gameState];

    newGameState[cellIndex] = player === Player.X ? Player.X : Player.O;
    setGameState(newGameState);
    setPlayer(player === Player.X ? Player.O : Player.X);
  };

  return (
    <Background $player={player}>
      <Layout>
        <Board gameState={gameState} onCellClick={handleCellClick} />
      </Layout>
    </Background>
  );
};
