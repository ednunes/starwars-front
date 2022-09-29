import { ReactComponent as StarwarsLogo } from '../../assets/icons/starwars_logo.svg';
import { THEMES_ICONS } from '~/utils/themes_icons';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import * as S from './styles';
import { LANGUAGES_ICONS } from '~/utils/languages_icons';
import usePersistedState from '~/utils/usePersistedState';

Header.propTypes = {
  handleSetTheme: PropTypes.func,
  theme: PropTypes.string,
};

function Header({ handleSetTheme, theme }: { handleSetTheme: () => void; theme: string }) {
  const [language, setLanguage] = usePersistedState('language', 'en');
  function changeLanguage() {
    const languages_keys = Object.keys(LANGUAGES_ICONS);
    const next_language_index = languages_keys.findIndex((l) => l === language) + 1;
    const new_language =
      next_language_index > languages_keys.length - 1
        ? languages_keys[0]
        : languages_keys[next_language_index];

    setLanguage(new_language);
  }

  function changeTheme() {
    handleSetTheme();
  }

  return (
    <S.Header>
      <S.Link href='/movies/'>
        <S.LogoContainer>
          <StarwarsLogo />
        </S.LogoContainer>
      </S.Link>
      <S.NavbarContent>
        <Navbar />
      </S.NavbarContent>
      <S.Actions>
        <S.ThemeButton onClick={() => changeTheme()}>{THEMES_ICONS[theme]}</S.ThemeButton>
        <S.LanguageButton onClick={() => changeLanguage()}>
          {LANGUAGES_ICONS[language]}
        </S.LanguageButton>
      </S.Actions>
    </S.Header>
  );
}

export default Header;
