import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '~/utils/device_sizes';

export const PageContainer = styled.div`
  position: relative;
  width: 80%;
  margin: 10px auto 120px auto;
  @media ${device.laptop} {
    margin: 30px auto;
    width: 90%;
  }
`;
export const PageContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;
export const Page = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 300vh;
`;

export const Title = styled.h1`
  letter-spacing: 1.6px;
  color: var(--title-color);
  font-family: 'Starwars';
  text-transform: capitalize;
  font-size: 2.3rem;
`;

export const Subtitle = styled.h2`
  font-family: 'Starwars';
  letter-spacing: 1.6px;
  color: var(--subtitle-color);
  font-size: 1.6rem;
  text-transform: capitalize;
  margin-bottom: 0.8rem;
`;

export const Subsubtitle = styled.h3`
  font-family: 'Starwars';
  letter-spacing: 1.6px;
  color: var(--text-color);
  font-size: 1.2rem;
  text-transform: capitalize;
  margin-bottom: 0.8rem;
`;

export const Text = styled.p`
  font-size: 0.9rem;
  color: var(--text-color);
  font-family: var(--font-terciary);
  margin-top: 4px;
  text-transform: capitalize;

  & > span {
    text-transform: uppercase;
  }
`;

export const TitleDescription = styled.p`
  font-size: 0.8rem;
  color: var(--title-color);
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ItemLink = styled(Link)`
  color: var(--text-color);
  text-decoration: underline;
`;

export const ItemLinkContainer = styled.div`
  margin: 0;
`;
