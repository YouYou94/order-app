import styled from 'styled-components';

export const discountButton = ({ onHandler, children }) => {
  return <DiscountButton onClick={onHandler}>{children}</DiscountButton>;
};

export const orderButton = ({ onHandler, children }) => {
  return <OrderButton onClick={onHandler}>{children}</OrderButton>;
};

export const DiscountButton = styled.button``;

export const OrderButton = styled.button``;
