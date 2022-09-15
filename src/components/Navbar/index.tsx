import { useState } from 'react';
import { ReactComponent as MovieIcon } from '../../assets/icons/movie_icon.svg';
import { ReactComponent as PlanetIcon } from '../../assets/icons/planets_icon.svg';
import { ReactComponent as SpeciesIcon } from '../../assets/icons/species_icon.svg';
import { ReactComponent as VehiclesIcon } from '../../assets/icons/vehicles_icon.svg';
import { ReactComponent as StarshipsIcon } from '../../assets/icons/starships_icon.svg';
import { ReactComponent as CharactersIcon } from '../../assets/icons/characters_icon.svg';

import * as S from './styles';

function Navbar() {
  const [selected, setSelected] = useState('Movies');

  const items = [
    {
      icon: <MovieIcon />,
      text: 'Movies',
      text_pt: 'Filmes',
    },
    {
      icon: <PlanetIcon />,
      text: 'Planets',
      text_pt: 'Planetas',
    },
    {
      icon: <StarshipsIcon />,
      text: 'Starship',
      text_pt: 'Naves',
    },
    {
      icon: <SpeciesIcon />,
      text: 'Species',
      text_pt: 'Espécies',
    },
    {
      icon: <CharactersIcon />,
      text: 'Character',
      text_pt: 'Personagens',
    },
    {
      icon: <VehiclesIcon />,
      text: 'Vehicles',
      text_pt: 'Veículos',
    },
  ];

  return (
    <S.Container>
      <S.Nav>
        <S.List>
          {items.map((item) => (
            <S.Item
              key={item.text}
              onClick={() => setSelected(item.text)}
              className={item.text === selected ? 'active' : ''}
            >
              <S.Link href='#'>
                <S.IconContainer>{item.icon}</S.IconContainer>
                <S.Text>{item.text}</S.Text>
              </S.Link>
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
