import { ReactComponent as StarwarsLogo } from '../../assets/icons/starwars_logo.svg';
import { THEMES_ICONS } from '~/styles/themes/themes_icons';
import Navbar from '../Navbar';
import SelectLanguage from '../SelectLanguage';
import * as S from './styles';
import { useTranslation } from 'react-i18next';
import { useSpring, animated } from '@react-spring/web';

function Header({ handleSetTheme, theme }: { handleSetTheme: () => void; theme: string }) {
  const { t } = useTranslation();
  const theme_label = t('header.theme');
  const language_label = t('header.language');

  const [theme_styles, theme_api] = useSpring(
    () => ({
      rotateZ: 0,
      transition: 'transform 250ms',
      config: {
        tension: 300,
        friction: 10,
      },
    }),
    [],
  );

  const handleMouseEnterTheme = () => {
    theme_api.start({
      from: { rotateZ: 180 },
      to: { rotateZ: 0 },
    });
  };

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
          <animated.div onMouseEnter={handleMouseEnterTheme} style={{ ...theme_styles }}>
            <S.ThemeButton onClick={() => handleSetTheme()}>{THEMES_ICONS[theme]}</S.ThemeButton>
          </animated.div>
          {theme_label}
        </S.Action>

        <S.Action>
          <SelectLanguage />
          {language_label}
        </S.Action>
      </S.Actions>
    </S.Header>
  );
}

export default Header;
