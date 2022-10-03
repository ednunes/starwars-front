import { ReactComponent as StarwarsLogo } from '../../assets/icons/starwars_logo.svg';
import { THEMES_ICONS } from '~/utils/themes_icons';
import Navbar from '../Navbar';
import SelectLanguage from '../SelectLanguage';
import * as S from './styles';
import { useTranslation } from 'react-i18next';

function Header({ handleSetTheme, theme }: { handleSetTheme: () => void; theme: string }) {
  const { t } = useTranslation();
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
        <S.Action>
          <S.ThemeButton onClick={() => handleSetTheme()}>{THEMES_ICONS[theme]}</S.ThemeButton>
          {t('header.theme')}
        </S.Action>

        <S.Action>
          <SelectLanguage />
          {t('header.language')}
        </S.Action>
      </S.Actions>
    </S.Header>
  );
}

export default Header;
