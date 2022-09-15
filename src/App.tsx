import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import usePersistedState from './utils/usePersistedState';
import { THEMES } from './utils/themes_dict';
import { Outlet } from 'react-router-dom';
import { PageContainer } from './components/StyledComponents/styles';

function App() {
  const [theme, setTheme] = usePersistedState('theme', 'sith');

  const handleSetTheme = () => {
    setTheme((theme: string) => {
      const themes_keys = Object.keys(THEMES);
      const next_theme_index = themes_keys.findIndex((t) => t === theme) + 1;
      const new_theme =
        next_theme_index > themes_keys.length - 1 ? themes_keys[0] : themes_keys[next_theme_index];

      return new_theme;
    });
  };

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyle />
      <Header handleSetTheme={handleSetTheme} theme={theme} />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </ThemeProvider>
  );
}

export default App;
