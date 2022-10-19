import { createGlobalStyle } from 'styled-components';
import Starjedi from '../assets/fonts/Starjedi.woff';

import RobotoBoldWoff from '../assets/fonts/RobotoBold.woff';
import RobotoBoldWoff2 from '../assets/fonts/RobotoBold.woff2';
import RobotoBoldTtf from '../assets/fonts/RobotoBold.ttf';
import RobotoBoldSvg from '../assets/fonts/RobotoBold.svg';

import RobotoRegularWoff from '../assets/fonts/RobotoRegular.woff';
import RobotoRegularWoff2 from '../assets/fonts/RobotoRegular.woff2';
import RobotoRegularTtf from '../assets/fonts/RobotoRegular.ttf';
import RobotoRegularSvg from '../assets/fonts/RobotoRegular.svg';

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
    font-family: 'RobotoRegular';
    transition: all 0.5s ease-out;
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

    --button-text-color: ${({ theme }) => theme.color.button_text};
    --button-color: ${({ theme }) => theme.color.button};
    --input-text-color: ${({ theme }) => theme.color.input_text};
    --input-color: ${({ theme }) => theme.color.input};


    --font-primary: 'Starwars';
    --font-secondary: 'RobotoBold';
    --font-terciary: 'RobotoRegular';
  }

  @font-face {
    font-family: 'Starwars';
    src: local("Starjedi"), url(${Starjedi}) format("woff");
    font-style: normal;
    letter-spacing: 0.6px;
  }

  @font-face {
    font-family: 'RobotoRegular';
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.6px;
    src: local(''),
        url(${RobotoRegularWoff2}) format('woff2'),
        url(${RobotoRegularWoff}) format('woff'); 
        url(${RobotoRegularTtf}) format('truetype'),
        url(${RobotoRegularSvg}) format('svg');
  }

  @font-face {
    font-family: 'RobotoBold';
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.6px;
    src: local(''),
        url(${RobotoBoldWoff2}) format('woff2'),
        url(${RobotoBoldWoff}) format('woff'); 
        url(${RobotoBoldTtf}) format('truetype'),
        url(${RobotoBoldSvg}) format('svg');
  }
`;
