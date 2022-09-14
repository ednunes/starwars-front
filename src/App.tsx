import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import dark from './styles/themes/dark';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <h1>Starwars Frontend</h1>
    </ThemeProvider>
  );
}

export default App;
