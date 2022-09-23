import styled from 'styled-components';

export const Input = styled.input`
  padding: 10px;
  border-radius: 20px;
  border: 2px solid var(--button-color);
  background: var(--background);
  color: var(--button-text-color);

  :hover,
  :focus {
    box-shadow: 0 0 20px 2px var(--button-color);
    border: 2px solid var(--button-color);
    outline: none;
  }
  ::placeholder {
    color: var(--button-text-color);
    opacity: 1;
  }
  ::selection {
    border: 2px solid var(--button-color);
  }
`;
