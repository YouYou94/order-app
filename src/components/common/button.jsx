import styled from 'styled-components';

export const DiscountButton = ({ onHandler, children }) => {
  return <DiscountBtn onClick={onHandler}>{children}</DiscountBtn>;
};

export const OrderButton = ({ onHandler, children }) => {
  return <OrderBtn onClick={onHandler}>{children}</OrderBtn>;
};

export const DiscountBtn = styled.button``;

export const OrderBtn = styled.button``;
