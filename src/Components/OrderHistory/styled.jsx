import styled from 'styled-components';

export const OrderHistoryWrap = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  text-align: center;

  padding: 0.3rem;

  background-color: white;
`;

export const OrderHistoryTitle = styled.label`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const OrderHistoryContentWrap = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  margin-top: 1rem;
`;

export const OrderHistoryContent = styled.div`
  display: flex;
  justify-content: space-between;

  border-top: 1px solid black;

  padding: 1rem 0;
`;

export const OrderHistoryLabel = styled.label``;
