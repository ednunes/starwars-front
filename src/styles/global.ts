import { createGlobalStyle } from 'styled-components';
import Starjedi from '../assets/fonts/Starjedi.ttf';
import RobotoRegular from '../assets/fonts/RobotoRegular.ttf';
import RobotoLight from '../assets/fonts/RobotoLight.ttf';
import RobotoBold from '../assets/fonts/RobotoBold.ttf';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    font-size: 16px;
    background: ${({ theme }) => theme.color.background};
  }

  :root {
    --background: ${({ theme }) => theme.color.background};
    --primary: ${({ theme }) => theme.color.primary};
    --secondary: ${({ theme }) => theme.color.secondary};
    --neon-hue: ${({ theme }) => theme.color.neon_hue};

    // Texts
    --text-color: ${({ theme }) => theme.color.text};
    --title-color: ${({ theme }) => theme.color.title};
    --subtitle-color: ${({ theme }) => theme.color.subtitle};
    --nav-text-color: ${({ theme }) => theme.color.nav_text};
    --nav-text-indicator-color: ${({ theme }) => theme.color.nav_text_indicator};
    --link-text-color: ${({ theme }) => theme.color.link_text};

    --font-primary: 'Starwars';
    --font-secondary: 'RobotoBold';
    --font-terciary: 'RobotoLight';
  }

  @font-face {
    font-family: 'Starwars';
    src: url(${Starjedi}) format('truetype');
    font-style: normal;
    letter-spacing: 0.6px;
  }
  @font-face {
    font-family: 'RobotoBold';
    src: url(${RobotoBold}) format('truetype');
    font-style: normal;
    letter-spacing: 0.6px;
  }
  @font-face {
    font-family: 'RobotoLight';
    src: url(${RobotoLight}) format('truetype');
    font-style: normal;
    letter-spacing: 0.6px;
  }
  @font-face {
    font-family: 'RobotoRegular';
    src: url(${RobotoRegular}) format('truetype');
    font-style: normal;
    letter-spacing: 0.6px;
  }
`;
