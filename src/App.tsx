import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import GlobalStyle from './styles/global';
import dark from './styles/themes/dark';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
