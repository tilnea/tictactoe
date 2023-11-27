import { createGlobalStyle } from "styled-components";
import BalooTamma2 from "./BalooTamma2.ttf";
import Barriecito from "./Barriecito.ttf";
import Courgette from "./Courgette.ttf";
import DancingScript from "./DancingScript.ttf";

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'BalooTamma2';
  src: url(${BalooTamma2}) format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: 'Barriecito';
  src: url(${Barriecito}) format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: 'Courgette';
  src: url(${Courgette}) format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: 'DancingScript';
  src: url(${DancingScript}) format('truetype');
  font-weight: 400;
}
`;

export default FontStyles;
