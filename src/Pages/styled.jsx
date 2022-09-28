import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 30rem;
  min-width: 20rem;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: gray;
`;

export const PageWhiteSpace = styled.div`
  flex: 1;
`;

export const PageButton = styled.button`
  height: 2rem;

  color: white;
  background: blueviolet;

  border: none;

  margin-bottom: 0.5rem;

  cursor: pointer;
`;
