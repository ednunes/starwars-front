import styled from 'styled-components';
import { device } from '~/utils/device_sizes';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: var(--primary);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  min-height: 70px;
`;

export const NavbarContent = styled.div`
  margin-top: 1em;
`;

export const Actions = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  height: 100%;
`;

export const LanguageButton = styled.button`
  cursor: pointer;
  width: 30px;
  min-height: 70x;
  border: none;
  background: transparent;
`;

export const ThemeButton = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: 0;
  background: transparent;
  fill: var(--secondary);

  &:hover {
    animation: pulse 1s infinite;
    border-radius: 50%;
    @keyframes pulse {
      0% {
        transform: scale(1);
        box-shadow: 0;
      }
      50% {
        transform: scale(1.3);
        box-shadow: 0 0 20px var(--secondary), 0 0 40px var(--secondary);
      }
      100% {
        transform: scale(1);
        box-shadow: 0;
      }
    }
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
