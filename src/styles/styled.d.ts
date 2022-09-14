import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      secondary: string;
      terciary: string;
      background: string;
      text: string;
      simple_text: string;
      title: string;
      shadowNeon: string;
    };
    fonts: {
      title: string;
      text: string;
      simple_text: string;
    };
  }
}
