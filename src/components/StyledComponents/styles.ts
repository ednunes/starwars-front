import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '~/utils/device_sizes';

export const PageContainer = styled.div`
  width: 90%;
  margin: 10px auto 120px auto;
  @media ${device.laptop} {
    margin: 30px auto;
  }
`;

export const Title = styled.h1`
  letter-spacing: 1.2px;
  color: var(--title-color);
  font-family: var(--font-primary);
  font-size: 1.6rem;
  line-height: 1.6rem;
  &:first-letter {
    text-transform: capitalize;
  }

  @media ${device.laptop} {
    font-size: 2.3rem;
    letter-spacing: 1.6px;
  }
`;

export const Subtitle = styled.h2`
  font-family: var(--font-primary);
  letter-spacing: 1.6px;
  color: var(--subtitle-color);
  font-size: 1.2rem;
  line-height: 1.8rem;
  margin-bottom: 0.8rem;
  &:first-letter {
    text-transform: capitalize;
  }

  @media ${device.laptop} {
    font-size: 1.6rem;
  }
`;

export const Subsubtitle = styled.h3`
  font-family: var(--font-primary);
  letter-spacing: 1.6px;
  line-height: 1.4rem;
  color: var(--text-color);
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  &:first-letter {
    text-transform: capitalize;
  }
`;

export const Text = styled.p`
  font-size: 0.8rem;
  color: var(--text-color);
  font-family: var(--font-terciary);
  margin-top: 4px;
  &:first-letter {
    text-transform: capitalize;
  }

  & > span {
    text-transform: uppercase;
  }

  @media ${device.laptop} {
    font-size: 0.9rem;
  }
`;

export const TitleDescription = styled.p`
  font-size: 0.8rem;
  color: var(--title-color);
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 20px;

  @media ${device.laptop} {
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    margin-top: 0px;
  }
`;

export const ItemLink = styled(Link)`
  color: var(--text-color);
  text-decoration: underline;
  font-size: 0.9rem;

  @media ${device.laptop} {
    font-size: 1rem;
  }
`;

export const ItemLinkContainer = styled.div`
  margin: 0;
`;

export const Card = styled.div`
  background: var(--primary);
  padding: 1.5rem 1.4rem 1.4rem 1.4rem;
  border-radius: 20px;
  box-shadow: 0 0 10px;
`;

export const CentralizedComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  height: 60vh;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 20px;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const BasicCard = styled(Card)`
  width: 100%;
`;

export const BasicCardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
