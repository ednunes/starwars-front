import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    side: string;
    color: {
      primary: string;
      secondary: string;
      background: string;
      nav_text: string;
      nav_text_indicator: string;
      title: string;
      subtitle: string;
      text: string;
      neon_hue: string;
      link_text: string;
    };
    font: {
      title: string;
      text: string;
      simple_text: string;
    };
  }
}
