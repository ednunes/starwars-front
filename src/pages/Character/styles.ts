import styled from 'styled-components';
import { device } from '~/utils/device_sizes';

export const Text = styled.pre`
  font-size: 1rem;
  color: var(--text-color);
  font-family: 'RobotoRegular';
  width: 100%;
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
    'fisic'
    'vehicles_and_starships'
    'list';
  @media ${device.laptop} {
    grid-template-columns: 70% 30%;
    grid-template-rows: auto;
    grid-template-areas:
      'fisic list'
      'vehicles_and_starships list';
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

export const Card = styled.div`
  background: var(--primary);
  padding: 0.5rem 1.4rem 1.4rem 1.4rem;
  border-radius: 20px;
`;

export const Fisic = styled(Card)`
  grid-area: fisic;
  & > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, 180px);
  }
`;

export const List = styled(Card)`
  grid-area: list;
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
