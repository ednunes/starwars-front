import styled from 'styled-components';
import { device } from '~/utils/device_sizes';

export const PageContainer = styled.div`
  width: 90%;
  margin: 10px auto;
  @media ${device.laptop} {
    margin: 30px auto;
  }
`;

export const Title = styled.h1`
  font-family: 'Starwars';
  color: var(--title-color);
  font: normal normal normal 2.5rem/30px Starwars;
  letter-spacing: 1.6px;
`;
