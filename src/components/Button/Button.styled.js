import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  display: flex;
  align-items: center;
  margin: 0 auto;
  border: 4px solid rgba(17, 101, 232, 1);
  border-radius: 4px;
  padding: 4px 10px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.4;
  background-color: #feff00;
  color: rgba(17, 101, 232, 1);
  transition: background-color color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 10px;
`;

export const StyledDivWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
