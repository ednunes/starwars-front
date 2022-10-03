import styled, { keyframes } from 'styled-components';
import { device } from '~/utils/device_sizes';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 5%;
  background: var(--primary);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  min-height: 70px;

  @media ${device.laptop} {
    justify-content: space-between;
  }
`;

export const NavbarContent = styled.div`
  margin-top: 1em;
`;

export const Actions = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80px;
  height: 100%;
  gap: 1rem;

  @media ${device.laptop} {
    gap: 1.4rem;
  }
`;

export const Action = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--text-color);
  font-size: 0.8rem;
  gap: 4px;
  @media ${device.laptop} {
    gap: 8px;
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
    -moz-transform: rotate(0deg);
  }
  100% {
    -moz-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const ThemeButton = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: 0;
  background: none;
  fill: var(--secondary);

  &:hover {
    animation: ${rotate} 2s infinite;
    box-shadow: 0 0 20px var(--secondary), 0 0 40px var(--secondary);
    border-radius: 50%;
  }
`;

export const Link = styled.a`
  width: 80px;
  min-height: 70x;

  @media ${device.laptop} {
    width: 110px;
  }
`;

export const LogoContainer = styled.div`
  fill: var(--secondary);
`;
