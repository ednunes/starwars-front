import styled from 'styled-components';
import { Card } from '~/components/StyledComponents/styles';

export const Text = styled.pre`
  font-size: 1rem;
  color: var(--text-color);
  font-family: 'RobotoRegular';
`;

export const BasicInfo = styled(Card)`
  width: 100%;
`;

export const BasicInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
