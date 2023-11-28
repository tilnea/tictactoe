import { styled } from "styled-components";

export const Button = styled.button`
  min-width: 200px;
  height: 86px;
  padding: 16px 40px 7px 40px;
  text-align: center;

  border-radius: 45px;
  background: #34add3;
  color: #fff;
  font-size: 36px;
  font-family: "BalooTamma2";

  box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.25);

  &:hover {
    box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.25) inset;
  }
`;
