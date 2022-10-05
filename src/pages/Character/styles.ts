import styled from 'styled-components';
import { Card } from '~/components/StyledComponents/styles';
import { device } from '~/utils/device_sizes';

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
    'fisic'
    'movie_list'
    'vehicles_and_starships'
    'species';
  @media ${device.laptop} {
    grid-template-columns: 60% 40%;
    grid-template-rows: auto;
    grid-template-areas:
      'fisic movie_list'
      'species movie_list'
      'vehicles_and_starships movie_list';
  }
`;

export const LinksGrid = styled.div`
  display: grid;
  gap: 1.4rem;
  grid-template-areas:
    'vehicles'
    'starships';
  @media ${device.laptop} {
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    grid-template-areas: 'vehicles starships';
  }
`;

export const Fisic = styled(Card)`
  grid-area: fisic;
  & > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, 180px);
  }
`;

export const MovieList = styled.div`
  grid-area: movie_list;
`;

export const Species = styled(Card)`
  grid-area: species;
`;

export const VehiclesAndStarships = styled(Card)`
  grid-area: vehicles_and_starships;
`;

export const VehiclesColumn = styled.span`
  grid-area: vehicles;
`;

export const StarshipsColumn = styled.span`
  grid-area: starships;
`;
