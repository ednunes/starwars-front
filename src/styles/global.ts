import { createGlobalStyle } from 'styled-components';
import StarWarsWoff from '../assets/fonts/StarWars.woff';
import StarWarsWoff2 from '../assets/fonts/StarWars.woff2';

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
    font-family: 'Roboto';
    font-display: swap;
    font-weight: 400;
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


    --font-primary: ${({ theme }) => theme.font.title};
    --font-secondary: ${({ theme }) => theme.font.text};
    --font-terciary: ${({ theme }) => theme.font.text};
  }

  @font-face {
    font-family: 'StarWars';
    src: local("StarWars"), url(${StarWarsWoff2}) format("woff2"), url(${StarWarsWoff}) format("woff");
    font-display: swap;
    font-style: normal;
    letter-spacing: 0.6px;
  }
`;
