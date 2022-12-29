import { CouponLabel, Title } from '../index.jsx';
import styled from 'styled-components';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { COUPON, FIXED, RATED } from '../../Constants.js';

export function CouponMenu({ prop, setIsMenu }) {
  const { couponList } = useContext(UserContext);
  const { result, setResult } = prop;

  const onHandlerClickCoupon = event => {
    const { id } = event.target;

    const selectCoupon = couponList.find(coupon => coupon.id === id);
    const { type, name, value } = selectCoupon;

    setResult({
      ...result,
      discount: {
        method: COUPON,
        type: type,
        value:
          type === RATED ? Math.ceil((result.totalPrice * value) / 100) : value,
        name: name,
        price:
          type === RATED ? Math.ceil((result.totalPrice * value) / 100) : value,
      },
    });

    setIsMenu(false);
  };

  return (
    <MenuLayout>
      <WhiteSpace onClick={() => setIsMenu(false)} />
      <SelectBox>
        <Title align={'center'}>보유 쿠폰</Title>
        <ListBox>
          {couponList.map((coupon, index) => {
            return (
              <CouponBox
                key={index}
                id={coupon.id}
                onClick={onHandlerClickCoupon}
              >
                <LabelBox id={coupon.id}>
                  <CouponLabel
                    id={coupon.id}
                    bold={700}
                    size={20}
                    lineheight={23}
                    color={'rgb(150, 18, 231)'}
                  >
                    {coupon.value.toLocaleString('ko-KR')}
                  </CouponLabel>
                  <CouponLabel
                    id={coupon.id}
                    bold={400}
                    size={16}
                    lineheight={19}
                    isFlex={true}
                    color={'rgb(150, 18, 231)'}
                  >
                    {coupon.type === FIXED ? '원' : '%'}
                  </CouponLabel>
                </LabelBox>
                <CouponLabel
                  id={coupon.id}
                  bold={400}
                  size={16}
                  lineheight={19}
                  color={'rgb(33, 33, 33)'}
                >
                  {coupon.name}
                </CouponLabel>
              </CouponBox>
            );
          })}
        </ListBox>
      </SelectBox>
    </MenuLayout>
  );
}

export const MenuLayout = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 0 8px;

  background: rgba(0, 0, 0, 0.3);
`;

export const SelectBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 398px;

  padding: 16px 16px 40px;
  border-radius: 8px 8px 0px 0px;

  gap: 16px;

  background-color: white;
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 366px;

  gap: 8px;
`;

export const CouponBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 366px;

  padding: 7px;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 4px;

  gap: 4px;

  background-color: rgb(245, 245, 245);
`;

export const LabelBox = styled.div`
  display: flex;
  flex-direction: row;

  width: 350px;
  height: 23px;

  gap: 4px;
`;

export const WhiteSpace = styled.div`
  flex: 1;

  width: 100%;
`;
