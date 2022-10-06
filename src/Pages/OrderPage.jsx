import { useState } from 'react';
import { CouponMenu } from '../Components/CouponMenu/CouponMenu.jsx';
import { Discount } from '../Components/Discount/Discount.jsx';
import { Orderer } from '../Components/Orderer/Orderer.jsx';
import { OrderHistory } from '../Components/OrderHistory/OrderHistory.jsx';
import { Payment } from '../Components/PaymentMethod/Payment.jsx';
import { PayOrder } from '../Components/PayOrder.jsx';
import { NONE } from '../Constants.js';
import * as Styled from './styled.jsx';

// 장바구니
const ORDERBASKET = [
  { id: 0, name: '태백시 감자올리브', price: 18000 },
  { id: 1, name: '태백산 감자버거', price: 5400 },
  { id: 2, name: '황지동 감자족발', price: 32000 },
];

export const OrderPage = ({ user, coupon }) => {
  // 결과 State
  // 주문자
  const [resultOrderer, setResultOrderer] = useState({
    address: user.address,
    address_detail: user.address_detail,
    phone_number: user.phone_number,
  });
  // 주문 요청 사항
  const [resultRequest, setResultRequest] = useState({
    request: '선택 안함',
    custom: false,
  });
  // 결제 수단 선택
  const [resultPayment, setResultPayment] = useState({
    payment: user.payment_methods[0].vendor_name,
  });
  // 할인 수단 선택
  const [isMenu, setIsMenu] = useState(false);

  const [resultDiscount, setResultDiscount] = useState({
    method: NONE,
    type: '',
    value: '',
    name: '',
  });

  // 총 결제 금액
  const [resultPrice, setResultPrice] = useState(0);

  return (
    <Styled.PageContainer>
      <Orderer
        user={user}
        resultOrderer={resultOrderer}
        setResultOrderer={setResultOrderer}
        resultRequest={resultRequest}
        setResultRequest={setResultRequest}
      />
      <Payment user={user} setResultPayment={setResultPayment} />
      <Discount
        user={user}
        resultDiscount={resultDiscount}
        resultPrice={resultPrice}
        setIsMenu={setIsMenu}
        setResultDiscount={setResultDiscount}
      />
      <OrderHistory
        OrderBasket={ORDERBASKET}
        resultDiscount={resultDiscount}
        setResultPrice={setResultPrice}
      />
      <PayOrder
        resultOrderer={resultOrderer}
        resultRequest={resultRequest}
        resultPayment={resultPayment}
        resultDiscount={resultDiscount}
        resultPrice={resultPrice}
      />
      {isMenu ? (
        <CouponMenu
          coupon={coupon}
          setIsMenu={setIsMenu}
          setResultDiscount={setResultDiscount}
        />
      ) : (
        <></>
      )}
    </Styled.PageContainer>
  );
};
