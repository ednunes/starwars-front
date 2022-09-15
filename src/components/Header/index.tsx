import { ReactComponent as StarwarsLogo } from '../../assets/icons/starwars_logo.svg';
import { ReactComponent as BrazilLogo } from '../../assets/icons/brazil_flag.svg';
import { THEMES_ICONS } from '~/utils/themes_icons';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import * as S from './styles';

Header.propTypes = {
  handleSetTheme: PropTypes.func,
  theme: PropTypes.string,
};

function Header({ handleSetTheme, theme }: { handleSetTheme: () => void; theme: string }) {
  function changeLanguage() {
    console.log('Change language');
  }

  function changeTheme() {
    handleSetTheme();
  }

  return (
    <S.Header>
      <S.Link href='#'>
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
          <BrazilLogo />
        </S.LanguageButton>
      </S.Actions>
    </S.Header>
  );
}

export default Header;
