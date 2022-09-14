import starwars_logo from '../../assets/icons/starwars_logo.svg';
import { ReactComponent as BrazilLogo } from '../../assets/icons/brazil_flag.svg';
import { ReactComponent as JediLogo } from '../../assets/icons/jedi_logo.svg';

import Navbar from '../Navbar';
import * as S from './styles';

function Header() {
  function changeTheme() {
    console.log('Change theme');
  }

  function changeLanguage() {
    console.log('Change language');
  }
  return (
    <S.Header>
      <S.Link href='#'>
        <img src={starwars_logo} alt='starwars_logo' />
      </S.Link>
      <S.NavbarContent>
        <Navbar />
      </S.NavbarContent>
      <S.Actions>
        <S.ThemeButton onClick={() => changeTheme()}>
          <JediLogo />
        </S.ThemeButton>
        <S.LanguageButton onClick={() => changeLanguage()}>
          <BrazilLogo />
        </S.LanguageButton>
      </S.Actions>
    </S.Header>
  );
}

export default Header;
