import styled from 'styled-components';

export const Episode = styled.p`
  color: var(--text-color);
  font-size: 0.8rem;
  margin-top: 6px;
  font-family: ${({ theme }) => theme.font.simple_text};
`;
