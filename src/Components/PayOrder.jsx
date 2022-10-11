import * as Styled from './styled.jsx';
import { NONE, POINT, COUPON } from '../Constants.js';
import { useNavigate } from 'react-router-dom';

export const PayOrder = ({
  resultOrderer,
  resultRequest,
  resultPayment,
  resultDiscount,
  resultPrice,
  user,
  setUser,
}) => {
  const navigate = useNavigate();

  const onHandlerPayOrder = () => {
    alert(
      `주소: ${resultOrderer.address}\n상세주소: ${
        resultOrderer.address_detail
      }\n전화번호: ${resultOrderer.phone_number}\n주문 요청 사항: ${
        resultRequest.request
      }\n결제 수단: ${resultPayment.payment}\n할인 수단: ${
        resultDiscount.method
      }\n총 결제 금액: ${
        resultPrice - Number(resultDiscount.price)
      }원\n결제완료!`
    );

    if (resultRequest.custom === true) {
      if (user.additional_requests.length >= 3) user.additional_requests.pop();
      setUser(current => ({
        ...current,
        additional_requests: [
          resultRequest.request,
          ...current.additional_requests,
        ],
      }));
    }

    if (resultDiscount.method !== NONE) {
      if (resultDiscount.method === COUPON) {
        const remainCoupon = user.coupons.filter(
          coupon => coupon !== resultDiscount.id
        );
        console.log(resultDiscount.id);
        console.log(remainCoupon);
        console.log(user.coupons);
        setUser(current => ({
          ...current,
          coupons: remainCoupon,
        }));
      } else if (resultDiscount.method === POINT) {
        const remainPoint = Number(user.points) - Number(resultDiscount.value);
        setUser(current => ({
          ...current,
          points: remainPoint,
        }));
      }
    }

    navigate('/order-app/');
  };
  return (
    <Styled.PayOrderWrap>
      <Styled.PayOrderBtn onClick={onHandlerPayOrder}>
        결제 하기
      </Styled.PayOrderBtn>
    </Styled.PayOrderWrap>
  );
};
