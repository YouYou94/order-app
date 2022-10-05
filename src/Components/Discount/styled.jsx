import styled from 'styled-components';

export const DiscountWrap = styled.div`
  flex: 20%;

  display: flex;
  flex-direction: column;

  margin-bottom: 0.2rem;

  padding: 1rem;

  background-color: white;
`;

export const DiscountTitle = styled.label`
  font-size: 1.5rem;
  font-weight: bold;
`;
// Coupon & Points
export const DiscountMethodWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0.2rem 0;

  padding: 0.5rem;

  background-color: rgb(225, 225, 225);
`;

export const DiscountMethodLabel = styled.label`
  margin-right: 0.5rem;

  color: ${prop => prop.color || 'black'};

  font-size: 0.7rem;
  font-weight: ${prop => prop.weight || ''};
`;

export const DiscountMethodContentWrap = styled.div`
  display: flex;

  margin-bottom: 0.1rem;
`;

export const DiscountMethodInput = styled.input`
  flex: 70%;

  text-overflow: ellipsis;
`;

export const DiscountMethodBtn = styled.button`
  flex: 30%;

  border: none;

  margin-left: 0.5rem;

  background-color: blueviolet;
  color: white;

  cursor: pointer;
`;
