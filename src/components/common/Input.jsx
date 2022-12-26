import styled from 'styled-components';

export const OrdererInput = ({ value, onHandler }) => {
  return <InfoInput value={value} onChange={onHandler} />;
};

export const InfoInput = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
