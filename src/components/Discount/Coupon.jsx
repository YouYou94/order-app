import { DiscountLabel, DiscountInput, DiscountButton } from '../index.jsx';
import styled from 'styled-components';

export function Coupon({ prop }) {
  return (
    <CouponBox>
      <LabelBox>
        <DiscountLabel bold={400} color={'rgb(33, 33, 33)'}>
          쿠폰
        </DiscountLabel>
        <DiscountLabel bold={700} color={'rgb(150, 18, 231)'}>
          보유 쿠폰 장
        </DiscountLabel>
      </LabelBox>
      <InputBox>
        <DiscountInput />
        <DiscountButton>선택</DiscountButton>
      </InputBox>
    </CouponBox>
  );
}

export const CouponBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 382px;
  height: 78px;

  gap: 8px;

  padding: 7px;
  border: 1px solid rgb(230, 230, 230);

  background-color: rgb(245, 245, 245);
`;

export const LabelBox = styled.div`
  display: flex;
  flex-direction: row;

  width: 366px;
  heigth: 14px;

  gap: 4px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;

  width: 366px;
  heigth: 40px;

  gap: 8px;
`;
