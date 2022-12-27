import styled from 'styled-components';
import {
  Layout,
  OrdererAddress,
  OrdererPhoneNum,
  SubTitle,
  Title,
  OrderRequest,
  RequestList,
  RequestCustom,
  Coupon,
  Point,
  CouponMenu,
} from '../components';
import { useState, useContext } from 'react';
import { UserContext } from '../App';
import { COUPON, NONE, REQUESTLIST } from '../Constants';

export default function OrderPage() {
  const { user } = useContext(UserContext);
  const { address, phone_number } = user;

  //console.log(user);

  const [result, setResult] = useState({
    address: `${address.city} ${address.state} ${address.address_line}`,
    additional_address: `${address.additional_address}`,
    phone_number: phone_number.replace(/-/g, ''),
    request: {
      list: REQUESTLIST,
      custom: false,
      user_request: '',
    },
    discount: {
      method: NONE,
      type: '',
      value: '',
      name: '',
      price: '',
    },
  });

  const [isMenu, setIsMenu] = useState(false);

  //console.log(result);

  const prop = { result, setResult };

  return (
    <OrderPageLayout>
      <Layout>
        <Title>주문자 정보</Title>
        <OrdererAddress prop={prop} />
        <OrdererPhoneNum prop={prop} />
        <OrderRequest>
          <SubTitle>주문 요청 사항</SubTitle>
          <RequestList prop={prop} />
          {result.request.custom ? <RequestCustom prop={prop} /> : <></>}
        </OrderRequest>
      </Layout>
      <Layout>
        <Title>결제 수단 선택</Title>
      </Layout>
      <Layout>
        <Title>할인 수단 선택</Title>
        <Coupon prop={prop} setIsMenu={setIsMenu} />
        <Point prop={prop} />
      </Layout>
      <Layout>
        <Title>배달 주문 내역</Title>
      </Layout>
      {isMenu ? <CouponMenu prop={prop} setIsMenu={setIsMenu} /> : <></>}
    </OrderPageLayout>
  );
}

export const OrderPageLayout = styled.div`
  position: relative;

  max-width: 480px;
  min-width: 320px;
  height: 100%;

  display: flex;
  flex-direction: column;

  gap: 8px;
`;
