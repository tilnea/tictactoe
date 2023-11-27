import { styled } from "styled-components";

type IconType = "X" | "O";

interface IconProps {
  id: IconType;
  size: number;
}

const SVG = styled.svg`
  width: 1em;
  height: 1em;
  display: inline-flex;
  align-items: center;
  margin: 0 4px;
  flex: 0 0 auto;
  color: inherit;
`;

export const Icon = ({ id, size }: IconProps) => {
  const inlineStyles = { transform: "none", fontSize: size };

  const path = "src/assets/svg-sprite.svg";

  return (
    <SVG style={inlineStyles} aria-label={`${id} icon`} role="img">
      <use href={`${path}#${id}`} />
    </SVG>
  );
};
