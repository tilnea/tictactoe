import { styled, css } from "styled-components";

interface CellProps {
  $clicked?: boolean;
  $winner?: boolean;
}

export const Cell = styled.span<CellProps>`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => {
    if (props.$winner) {
      return css`
        box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.25) inset,
          0px 0px 4px 4px rgba(238, 220, 57, 0.8);
      `;
    } else if (props.$clicked) {
      return css`
        box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.25) inset;
      `;
    } else {
      return css`
        box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.25);
      `;
    }
  }}
`;
