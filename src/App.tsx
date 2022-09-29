import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import usePersistedState from './utils/usePersistedState';
import { THEMES } from './utils/themes_dict';
import { useLocation, useOutlet } from 'react-router-dom';
import { PageContainer, PageContentContainer, Page } from './components/StyledComponents/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles.css';
import { useRef } from 'react';

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

  const location = useLocation();
  const currentOutlet = useOutlet();
  const nodeRef = useRef(null);

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyle />
      <Header handleSetTheme={handleSetTheme} theme={theme} />
      <TransitionGroup appear={true} enter={false} exit={true} className='trans'>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={{
            appear: 2000,
            enter: 2000,
            exit: 2000,
          }}
          classNames='transition-page'
          unmountOnExit
        >
          {() => (
            <PageContainer>
              <PageContentContainer ref={nodeRef}>{currentOutlet}</PageContentContainer>
            </PageContainer>
          )}
        </CSSTransition>
      </TransitionGroup>
    </ThemeProvider>
  );
}

export default App;
