import usePersistedState from '~/hooks/usePersistedState';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { LanguageButton } from './styles';
import { LANGUAGES_ICONS } from '~/utils/languages_icons';
import { useSpring, animated } from '@react-spring/web';

export default function SelectLanguage() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = usePersistedState('language', 'en-us');

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n.language]);

  function changeLanguage() {
    const languages_keys = Object.keys(LANGUAGES_ICONS);
    const next_language_index = languages_keys.findIndex((l) => l === language) + 1;
    const new_language =
      next_language_index > languages_keys.length - 1
        ? languages_keys[0]
        : languages_keys[next_language_index];

    setLanguage(new_language);
  }

  const [language_styles, language_api] = useSpring(
    () => ({
      y: 0,
      config: {
        tension: 100,
        friction: 5,
      },
    }),
    [],
  );

  const handleMouseEnter = () => {
    language_api.start({
      from: { y: 6 },
      to: { y: 0 },
    });
  };

  return (
    <animated.div onMouseEnter={handleMouseEnter} style={{ ...language_styles }}>
      <LanguageButton onClick={() => changeLanguage()}>{LANGUAGES_ICONS[language]}</LanguageButton>
    </animated.div>
  );
}
