import { DiscountLabel, DiscountInput, DiscountButton } from '../index.jsx';
import { useContext } from 'react';
import { UserContext } from '../../App.js';
import styled from 'styled-components';
import { COUPON } from '../../Constants.js';

export function Coupon({ prop, setIsMenu }) {
  const { couponList } = useContext(UserContext);
  const { result, setResult } = prop;

  const onHandlerClickCouponSelect = () => {
    setResult({
      ...result,
      discount: {
        ...result.discount,
        method: COUPON,
      },
    });

    setIsMenu(true);
  };

  return (
    <CouponBox>
      <LabelBox>
        <DiscountLabel bold={400} color={'rgb(33, 33, 33)'}>
          쿠폰
        </DiscountLabel>
        <DiscountLabel bold={700} color={'rgb(150, 18, 231)'}>
          보유 쿠폰 {couponList.length}장
        </DiscountLabel>
      </LabelBox>
      <InputBox>
        <DiscountInput placeholder={'쿠폰을 선택해주세요.'} disabled={true} />
        <DiscountButton onHandler={onHandlerClickCouponSelect}>
          선택
        </DiscountButton>
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
