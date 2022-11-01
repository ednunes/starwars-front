import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  background: transparent;
  border: 3px solid var(--button-color);
  padding: 1rem 2rem;
  text-align: center;
  margin-top: auto;
  border-radius: 40px;
  color: var(--button-color);
  font-family: var(--font-secondary);
  font-weight: 700;
  :visited {
    color: var(--link-text-color);
  }
  :hover {
    box-shadow: 0 0 20px 2px var(--button-color);
  }
`;
