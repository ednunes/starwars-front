import styled from 'styled-components';

export const LanguageButton = styled.div`
  cursor: pointer;
  width: 40px;
  height: auto;
  border: none;

  :hover {
    box-shadow: 0 0 20px var(--secondary), 0 0 40px var(--secondary);
    background: var(--secondary);
  }
`;
