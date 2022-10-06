import styled from 'styled-components';
import { device } from '~/utils/device_sizes';

export const LanguageButton = styled.div`
  cursor: pointer;
  width: 35px;
  height: auto;
  border: none;

  :hover {
    box-shadow: 0 0 20px var(--secondary), 0 0 40px var(--secondary);
    background: var(--secondary);
  }

  @media ${device.laptop} {
    width: 40px;
  }
`;
