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
  font-family: 'Starwars';
  letter-spacing: 1.6px;
  color: var(--title-color);
  font: normal normal normal 2.3rem/50px Starwars;
`;
