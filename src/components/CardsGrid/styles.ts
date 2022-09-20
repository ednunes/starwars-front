import styled from 'styled-components';

export const Grid = styled.div`
  margin-top: 40px;
  display: grid;
  gap: 2rem;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
