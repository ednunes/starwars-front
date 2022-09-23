import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Blade, Lightsaber } from '../Lightsaber/styles';

export const LightsaberCard = styled.div`
  display: flex;
  justify-content: content;
  height: 100%;

  & > :first-child {
    align-self: start;
    transform: rotate(180deg);
  }
  & > :last-child {
    align-self: end;
  }

  &:hover ${Lightsaber} ${Blade} {
    transform: scaleY(1);
    opacity: 1;
  }
`;

export const Card = styled.div`
  background: var(--primary);
  width: 270px;
  min-height: 300px;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  padding: 1.4rem 1.2rem;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: var(--subtitle-color);
  font-family: var(--font-primary);
  font-size: 1.3rem;
  line-height: 1.4rem;
  letter-spacing: 1.4px;
`;

export const Subtitle = styled.h3`
  font-size: 0.9rem;
  margin: 1rem 0 0.4rem 0;
  color: var(--text-color);
  text-transform: uppercase;
  font-family: var(--font-secondary);
`;

export const Text = styled.p`
  font-size: 0.8rem;
  color: var(--text-color);
  font-family: var(--font-terciary);
  margin-top: 4px;

  & > span {
    text-transform: uppercase;
  }
`;

export const LinkButton = styled(Link)`
  cursor: pointer;
  text-transform: uppercase;
  background: var(--secondary);
  padding: 0.5rem 1.1rem;
  text-align: center;
  margin-top: auto;
  border-radius: 40px;
  color: var(--link-text-color);
  font-family: var(--font-secondary);
  :visited {
    color: var(--link-text-color);
  }
  :hover {
    box-shadow: 0 0 20px 2px var(--secondary);
  }
`;

export const ContentContainer = styled.div`
  margin: 10px 0 30px 0;
`;
