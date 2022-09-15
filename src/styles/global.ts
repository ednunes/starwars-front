import { createGlobalStyle } from 'styled-components';
import Starjedi from '../assets/fonts/Starjedi.ttf';
import RobotoRegular from '../assets/fonts/RobotoRegular.ttf';
import RobotoLight from '../assets/fonts/RobotoLight.ttf';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
  }

  :root {
    --background: ${({ theme }) => theme.colors.background};
    --primary: ${({ theme }) => theme.colors.primary};
    --secondary: ${({ theme }) => theme.colors.secondary};
    --text-color: ${({ theme }) => theme.colors.text};
    --title-color: ${({ theme }) => theme.colors.title};
  }

  @font-face {
    font-family: 'Starwars';
    src: url(${Starjedi}) format('truetype');
    font-style: normal;
    letter-spacing: 0.6px;
  }
  @font-face {
    font-family: 'RobotoLight';
    src: url(${RobotoRegular}) format('truetype');
    font-style: normal;
    letter-spacing: 0.6px;
  }
  @font-face {
    font-family: 'RobotoRegular';
    src: url(${RobotoLight}) format('truetype');
    font-style: normal;
    letter-spacing: 0.6px;
  }
`;
