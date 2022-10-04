import styled from 'styled-components';

export const CouponMenuContainer = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: rgb(128, 128, 128, 0.8);
`;

export const CouponMenuWhiteSpace = styled.div`
  flex: 70%;
`;

export const CouponMenuWrap = styled.div`
  flex: 30%;

  display: flex;
  flex-direction: column;

  margin: 0 1rem;
  background-color: white;
`;

export const CouponMenuTitle = styled.label`
  text-align: center;

  font-size: 1.2rem;
  font-weight: bold;
`;

export const CouponContent = styled.div`
  height: 3rem;

  display: flex;
  flex-direction: column;

  margin: 0.2rem;
  border: 1px solid black;
  padding: 0.5rem;

  background-color: rgb(230, 230, 230);

  cursor: pointer;
`;

export const CouponLabel = styled.label`
  margin-top: 0.1rem;

  color: ${prop => prop.color || 'black'};
  font-weight: ${prop => prop.weight || ''};
  font-size: 0.8rem;

  cursor: pointer;
`;
