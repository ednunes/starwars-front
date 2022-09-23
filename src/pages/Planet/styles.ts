import styled from 'styled-components';
import { device } from '~/utils/device_sizes';

export const Text = styled.pre`
  font-size: 1rem;
  color: var(--text-color);
  font-family: 'RobotoRegular';
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

export const Flex = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const LinksGrid = styled.div`
  display: grid;
  gap: 1.4rem;
  margin-top: 2rem;
  grid-template-areas:
    'movies'
    'characters';
  @media ${device.laptop} {
    grid-template-rows: auto;
    grid-template-areas: 'movies characters';
  }
`;

export const Card = styled.div`
  background: var(--primary);
  padding: 0.5rem 1.4rem 1.4rem 1.4rem;
  border-radius: 20px;
`;

export const BasicInfo = styled(Card)`
  grid-area: basic_info;
  width: 100%;
`;

export const BasicInfoContent = styled.div`
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(auto-fit, 180px);
`;

export const MoviesColumn = styled.span`
  grid-area: movies;
`;

export const CharactersColumn = styled.span`
  grid-area: characters;
`;
