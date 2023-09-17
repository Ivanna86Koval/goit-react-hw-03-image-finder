import styled from 'styled-components';

export const ImageList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin: 0;
  padding: 84px 0 0 0;
  list-style: none;
`;
