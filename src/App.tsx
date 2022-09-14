import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import GlobalStyle from './styles/global';
import dark from './styles/themes/dark';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
