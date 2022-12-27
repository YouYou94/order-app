import styled from 'styled-components';

export const DiscountButton = ({ children, onHandler }) => {
  return (
    <DiscountMethodButton onClick={onHandler}>{children}</DiscountMethodButton>
  );
};

export const PayButton = ({ children, onHandler }) => {
  return <PayResultButton onClick={onHandler}>{children}</PayResultButton>;
};

export const DiscountMethodButton = styled.button`
  box-sizing: border-box;

  width: 96px;
  height: 40px;

  padding: 11px 15px;
  border: 1px solid rgb(150, 18, 231);

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  background-color: rgb(150, 18, 231);
  color: white;

  cursor: pointer;
`;

export const PayResultButton = styled.button`
  box-sizing: border-box;

  width: 414px;
  height: 55px;

  padding: 15px 23px;
  border: 1px solid rgb(150, 18, 231);

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  background-color: rgb(150, 18, 231);
  color: white;

  cursor: pointer;
`;
