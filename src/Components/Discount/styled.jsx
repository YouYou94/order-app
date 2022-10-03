import styled from 'styled-components';

export const DiscountWrap = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  margin-bottom: 0.5rem;

  padding: 1rem;

  background-color: white;
`;

export const DiscountTitle = styled.label`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const DiscountMethodWrap = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 1rem 0;

  padding: 0.5rem;

  background-color: rgb(200, 200, 200);
`;

export const DiscountMethodLabel = styled.label`
  margin-right: 0.5rem;

  color: ${prop => prop.color || 'black'};

  font-weight: ${prop => prop.weight || ''};
`;

// Coupon
export const CouponWrap = styled.div`
  flex: 1;

  display: flex;

  margin-bottom: 0.1rem;
`;

export const CouponInput = styled.input`
  flex: 75%;
`;

export const CouponBtn = styled.button`
  flex: 25%;

  border: none;

  margin-left: 0.5rem;

  background-color: blueviolet;
  color: white;

  cursor: pointer;
`;
