import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import usePersistedState from './hooks/usePersistedState';
import { THEMES } from '~/styles/themes/themes_dict';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { PageContainer } from './components/StyledComponents/styles';
import { useEffect } from 'react';

function App() {
  const [theme, setTheme] = usePersistedState('theme', 'sith');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      return navigate('/movies/');
    }
  }, [location.pathname, navigate]);

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
    <ThemeProvider theme={THEMES[theme].style}>
      <GlobalStyle />
      <Header handleSetTheme={handleSetTheme} theme={theme} />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </ThemeProvider>
  );
}

export default App;
