import styled from 'styled-components';

export const OrdererWrap = styled.div`
  flex: 20%;

  display: flex;
  flex-direction: column;

  margin-bottom: 0.2rem;

  padding: 1rem;

  background-color: white;
`;

export const OrdererTitle = styled.label`
  font-size: 1.5rem;
  font-weight: bold;
`;

// Orderer Component Styled-Components
export const OrdererComponentWrap = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.3rem;
`;

export const OrdererComponentLabel = styled.div`
  margin-bottom: 0.5rem;
`;

export const OrdererComponentInput = styled.input``;

// Request
export const RequestSelect = styled.select``;

export const RequestOtion = styled.option``;

export const CustomRequestTextArea = styled.textarea`
  height: 5rem;

  margin-top: 0.5rem;
`;

export const CustomTextLength = styled.label`
  font-size: 0.8rem;
  text-align: right;
`;
