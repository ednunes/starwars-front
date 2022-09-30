import { ReactComponent as StarwarsLogo } from '../../assets/icons/starwars_logo.svg';
import { THEMES_ICONS } from '~/utils/themes_icons';
import Navbar from '../Navbar';
import Tooltip from '../TooltipComponent';
import Translator from '~/utils/Translator';
import SelectLanguage from '../SelectLanguage';
import * as S from './styles';

function Header({ handleSetTheme, theme }: { handleSetTheme: () => void; theme: string }) {
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
        <Tooltip
          content={<Translator>header.theme</Translator>}
          trigger={
            <S.ThemeButton onClick={() => handleSetTheme()}>{THEMES_ICONS[theme]}</S.ThemeButton>
          }
        />
        <Tooltip content={<Translator>header.language</Translator>} trigger={<SelectLanguage />} />
      </S.Actions>
    </S.Header>
  );
}

export default Header;
