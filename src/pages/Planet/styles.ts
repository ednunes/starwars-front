import styled from 'styled-components';
import { Card } from '~/components/StyledComponents/styles';
import { device } from '~/utils/device_sizes';

export const Text = styled.pre`
  font-size: 1rem;
  color: var(--text-color);
  font-family: 'RobotoRegular';
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 30px;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const BasicInfo = styled(Card)`
  width: 100%;
`;

export const BasicInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
