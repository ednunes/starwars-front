import styled from 'styled-components';
import { device } from '~/utils/device_sizes';

export const Text = styled.pre`
  font-size: 1rem;
  color: var(--text-color);
  font-family: 'RobotoRegular';
`;

export const ColumnsLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1.4rem;
  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Column = styled.span`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: auto;

  @media ${device.laptop} {
    max-height: 380px;
  }
`;

export const Grid = styled.div`
  display: grid;
  margin-top: 2rem;
  gap: 1.4rem;
  grid-template-areas:
    'sinopse'
    'technique'
    'list';
  @media ${device.laptop} {
    grid-template-columns: 30% 70%;
    grid-template-rows: auto;
    grid-template-areas:
      'sinopse list'
      'technique list';
  }
`;

export const LinksGrid = styled.div`
  display: grid;
  gap: 1.4rem;
  grid-template-areas:
    'characters'
    'species'
    'vehicles'
    'starships'
    'planets';
  @media ${device.laptop} {
    grid-template-columns: 30% 30% 40%;
    grid-template-rows: auto;
    grid-template-areas:
      'characters characters species'
      'vehicles starships planets';
  }
`;

export const Card = styled.div`
  background: var(--primary);
  padding: 0.5rem 1.4rem 1.4rem 1.4rem;
  border-radius: 20px;
`;

export const Sinopse = styled(Card)`
  grid-area: sinopse;
`;

export const List = styled(Card)`
  grid-area: list;
`;

export const Technique = styled(Card)`
  grid-area: technique;
`;

export const CharactersColumn = styled.span`
  grid-area: characters;
`;

export const SpeciesColumn = styled.span`
  grid-area: species;
`;

export const VehiclesColumn = styled.span`
  grid-area: vehicles;
`;

export const StarshipsColumn = styled.span`
  grid-area: starships;
`;

export const PlanetsColumn = styled.span`
  grid-area: planets;
`;