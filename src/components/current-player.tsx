import { styled } from "styled-components";
import { Icon } from "./icon";

interface CurrentPlayerProps {
  showX: boolean;
  showO: boolean;
}

const Wrapper = styled.div`
  position: relative;
  width: 86px;
  height: 86px;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  transition: 1s opacity;
  opacity: 1;

  &.hidden {
    opacity: 0;
  }
`;

export const CurrentPlayer = ({ showX, showO }: CurrentPlayerProps) => {
  return (
    <Wrapper>
      <IconWrapper className={!showX ? "hidden" : ""}>
        <Icon id="X" size={86} />
      </IconWrapper>
      <IconWrapper className={!showO ? "hidden" : ""}>
        <Icon id="O" size={86} />
      </IconWrapper>
    </Wrapper>
  );
};
