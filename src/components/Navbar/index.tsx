import { useState } from 'react';
import sith_logo from '../../assets/icons/sith_logo.svg';
import movie_icon from '../../assets/icons/movie_icon.svg';
import brazil_flag from '../../assets/icons/brazil_flag.svg';
import planet_icon from '../../assets/icons/planets_icon.svg';
import species_icon from '../../assets/icons/species_icon.svg';
import vehicle_icon from '../../assets/icons/vehicles_icon.svg';
import starwars_logo from '../../assets/icons/starwars_logo.svg';
import starship_icon from '../../assets/icons/starships_icon.svg';
import character_icon from '../../assets/icons/characters_icon.svg';
import * as S from './styles.ts';

function Navbar() {
  const [selected, setSelected] = useState('Movies');

  const items = [
    {
      icon: movie_icon,
      text: 'Movies',
      text_pt: 'Filmes',
    },
    {
      icon: planet_icon,
      text: 'Planets',
      text_pt: 'Planetas',
    },
    {
      icon: starship_icon,
      text: 'Starship',
      text_pt: 'Naves',
    },
    {
      icon: species_icon,
      text: 'Species',
      text_pt: 'Espécies',
    },
    {
      icon: character_icon,
      text: 'Character',
      text_pt: 'Personagens',
    },
    {
      icon: vehicle_icon,
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
                <S.IconContainer>
                  <S.Icon src={item.icon} />
                </S.IconContainer>
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
