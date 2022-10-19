import styled from 'styled-components';
import { Text } from '../StyledComponents/styles';

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ChartLegend = styled(Text)`
  color: var(--text-color);
  text-transform: uppercase;
`;
