import styled from 'styled-components';

export const OrdererInput = ({ value, onHandler }) => {
  return <InfoInput value={value} onChange={onHandler} />;
};

export const DiscountInput = ({ value, onHandler, placeholder, disabled }) => {
  return (
    <DiscountMethodInput
      value={value}
      onChange={onHandler}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export const InfoInput = styled.input`
  box-sizing: border-box;

  width: 382px;
  height: 35px;

  padding: 7px 12px;
  border: 1px solid rgb(204, 204, 204);

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: rgb(33, 33, 33);

  outline: none;
`;

export const DiscountMethodInput = styled.input`
  box-sizing: border-box;

  width: 262px;
  height: 40px;

  padding: 7px 12px;
  border: 1px solid rgb(204, 204, 204);

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: rgb(102, 102, 102);

  outline: none;
  text-overflow: ellipsis;

  &:disabled {
    background: white;
  }
`;
