import { styled } from "styled-components";
import { Icon } from "./icon";

interface ScoreProps {
  score: { x: number; o: number; tie: number };
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 10px 20px 10px;
  flex-direction: column;
  font-family: "BalooTamma2";
  font-size: 25px;
`;

const Row = styled.div`
  display: flex;
  padding: 0px 10px;
  justify-content: space-between;
  align-self: stretch;

  color: #34add3;
`;

const Score = styled.div`
  width: 40px;
  text-align: center;

  font-family: "BalooTamma2";
  font-size: 20px;
`;

export const Scoreboard = ({ score }: ScoreProps) => {
  return (
    <Wrapper>
      <Row>
        <Icon id="X" size={40} />
        <span>Tie</span>
        <Icon id="O" size={40} />{" "}
      </Row>
      <Row>
        <Score>{score.x}</Score>
        <Score>{score.tie}</Score>
        <Score>{score.o}</Score>
      </Row>
    </Wrapper>
  );
};
