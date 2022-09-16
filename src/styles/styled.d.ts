import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    side: string;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      simple_text: string;
      title: string;
      neon_hue: string;
    };
    fonts: {
      title: string;
      text: string;
      simple_text: string;
    };
  }
}
