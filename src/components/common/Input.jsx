import styled from 'styled-components';

export const OrdererInput = ({ type, value, onHandler }) => {
  return <OrdererInfoInput type={type} value={value} onChange={onHandler} />;
};

export const OrdererInfoInput = styled.input`
  width: 366px;
  height: 19px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #212121;
`;
