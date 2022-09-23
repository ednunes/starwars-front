import styled from 'styled-components';
import { device } from '~/utils/device_sizes';

export const Grid = styled.div`
  margin-top: 40px;
  display: grid;
  gap: 2rem;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 300px);
  @media ${device.laptop} {
    justify-content: center;
  }
`;

export const CentralizedComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;
