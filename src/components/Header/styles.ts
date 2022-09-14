import styled from 'styled-components';
import { device } from '~/utils/device_sizes';

export const Header = styled.header`
  display: flex;
  align-content: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 5%;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;

  @media ${device.laptop} {
    padding: 1em 5% 0 5%;
  }
`;

export const Actions = styled.header`
  display: flex;
  align-content: center;
  justify-content: space-between;
  width: 80px;
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
