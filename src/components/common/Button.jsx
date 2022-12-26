import styled from 'styled-components';

export const DiscountButton = ({ children, onHandler }) => {
  return (
    <DiscountMethodButton onClick={onHandler}>{children}</DiscountMethodButton>
  );
};

export const DiscountMethodButton = styled.button`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
