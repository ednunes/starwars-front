import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as MovieIcon } from '../../assets/icons/navbar/movie_icon.svg';
import { ReactComponent as PlanetIcon } from '../../assets/icons/navbar/planets_icon.svg';
import { ReactComponent as SpeciesIcon } from '../../assets/icons/navbar/species_icon.svg';
import { ReactComponent as VehiclesIcon } from '../../assets/icons/navbar/vehicles_icon.svg';
import { ReactComponent as StarshipsIcon } from '../../assets/icons/navbar/starships_icon.svg';
import { ReactComponent as CharactersIcon } from '../../assets/icons/navbar/characters_icon.svg';
import * as S from './styles';
import Translator from '~/components/Translator';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname || '/movies/');
  const { i18n } = useTranslation();

  useEffect(() => {
    setSelected(location.pathname);
  }, [location, i18n.language]);

  const items = [
    {
      icon: <MovieIcon />,
      text: 'pages.movies',
      link: '/movies/',
    },
    {
      icon: <PlanetIcon />,
      text: 'pages.planets',
      link: '/planets/',
    },
    {
      icon: <StarshipsIcon />,
      text: 'pages.starships',
      link: '/starships/',
    },
    {
      icon: <SpeciesIcon />,
      text: 'pages.species',
      link: '/species/',
    },
    {
      icon: <CharactersIcon />,
      text: 'pages.characters',
      link: '/characters/',
    },
    {
      icon: <VehiclesIcon />,
      text: 'pages.vehicles',
      link: '/vehicles/',
    },
  ];

  return (
    <S.Container>
      <S.Nav>
        <S.List numberOfItems={items.length}>
          {items.map((item) => (
            <S.Item
              key={item.link}
              onClick={() => setSelected(item.link)}
              className={selected.includes(item.link) ? 'active' : ''}
            >
              <S.NavLink to={item.link}>
                <S.IconContainer>{item.icon}</S.IconContainer>
                <S.Text>
                  <Translator>{item.text}</Translator>
                </S.Text>
              </S.NavLink>
            </S.Item>
          ))}
          <S.IndicatorContainer>
            <S.Indicator />
          </S.IndicatorContainer>
        </S.List>
      </S.Nav>
    </S.Container>
  );
}

export default Navbar;
