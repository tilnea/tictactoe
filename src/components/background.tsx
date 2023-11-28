import { styled } from "styled-components";
import { ReactNode } from "react";

const xSVG = `'data:image/svg+xml,<svg width="120" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.3084 19.8799C20.0126 20.1757 20.0126 20.6554 20.3084 20.9512L28.6813 29.3241L19.6656 38.3399C19.3698 38.6357 19.3698 39.1154 19.6656 39.4112L19.9335 39.6791C20.2293 39.9749 20.709 39.9749 21.0048 39.6791L30.0205 30.6634L38.9827 39.6255C39.2786 39.9214 39.7582 39.9214 40.0541 39.6255L40.3219 39.3577C40.6178 39.0618 40.6178 38.5821 40.3219 38.2863L31.3598 29.3241L39.6791 21.0048C39.9749 20.709 39.9749 20.2293 39.6791 19.9334L39.4112 19.6656C39.1154 19.3697 38.6357 19.3697 38.3399 19.6656L30.0205 27.9849L21.6477 19.612C21.3518 19.3162 20.8721 19.3162 20.5763 19.612L20.3084 19.8799Z" fill="%23A3DEBA"><animate attributeName="opacity" calcMode="spline" dur="2" values="0;0.2;" keySplines=".5 0 .5 1" repeatCount="1" begin="0" fill="freeze" to="0.2"></animate></path></svg>'`;
const oSVG = `'data:image/svg+xml,<svg width="120" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M29.9621 40.8334C35.9662 40.8334 40.8334 35.9662 40.8334 29.9621C40.8334 23.9581 35.9662 19.0909 29.9621 19.0909C23.9581 19.0909 19.0909 23.9581 19.0909 29.9621C19.0909 35.9662 23.9581 40.8334 29.9621 40.8334ZM29.9621 42.5758C36.9285 42.5758 42.5758 36.9285 42.5758 29.9621C42.5758 22.9958 36.9285 17.3485 29.9621 17.3485C22.9958 17.3485 17.3485 22.9958 17.3485 29.9621C17.3485 36.9285 22.9958 42.5758 29.9621 42.5758Z" fill="%23F6A0F3"><animate attributeName="opacity" calcMode="spline" dur="2" values="0;0.2;" keySplines="0 .5 1 0.5" repeatCount="1" begin="0" fill="freeze" to="0.2"></animate></path></svg>'`;

interface WrapperProps {
  $showX: boolean;
  $showO: boolean;
}

interface BackgroundProps {
  children: ReactNode;
  showOnlyX: boolean;
  showOnlyO: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  background-color: #fff;
  background-image: url(${({ $showX }) => ($showX ? xSVG : oSVG)}),
    url(${({ $showO }) => ($showO ? oSVG : xSVG)});
  background-position: -30px, 30px;
  height: 100vh;
  width: 100vw;
`;

export const Background = ({
  children,
  showOnlyX,
  showOnlyO,
}: BackgroundProps) => {
  return (
    <Wrapper $showX={showOnlyX} $showO={showOnlyO}>
      {children}
    </Wrapper>
  );
};
