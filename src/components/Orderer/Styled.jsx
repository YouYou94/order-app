import styled from 'styled-components';

export const OrdererBox = styled.section`
  width: 414px;
  height: 262px;

  display: flex;
  flex-direction: column;

  gap: 16px;
  padding: 16px;

  background-color: white;
`;

/* Address */
export const AddressBox = styled.div`
  width: 382px;
  height: 62px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 8px;
`;

export const AddressText = styled.label``;

/* Order Request */
export const RequestBox = styled.div`
  width: 382px;

  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export const RequestSelect = styled.select`
  box-sizing: border-box;
  height: 35px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  padding: 5px 12px;
  border: 1px solid rgb(204, 204, 204);
  outline: none;
`;

export const RequestOption = styled.option`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;
