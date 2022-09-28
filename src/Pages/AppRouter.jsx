import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './MainPage';
import { OrderPage } from './OrderPage';
import axios from 'axios';

export const AppRouter = () => {
  const [user, setUser] = useState(null);
  const coupon = [];

  // 현재 AppRouter의 주 기능은 페이지 이동이다.
  // axios 데이터를 과연 이곳에서 불러와야 할까?
  // 다른 쪽에서 불러올 수는 없을까?
  // 만약 OrderPage에서 불러온다면?
  // 크게 상관은 없는데, 또 다시 만약 MainPage와 OrderPage가 연결되어야 한다면?
  // 그렇다면 useContext를 써서 쓴다면?
  // 이 부분은 근데 개인적인 생각으로 비추... 이뮤터블하기 때문에..
  // 그럼 더 나은 방법은 무엇일까? 고민하기..

  const getUser = async () => {
    await axios
      .get('http://localhost:4000/users/1n2pgi02k5')
      .then(response => {
        setUser({
          address: `${response.data.address.city} ${response.data.address.state} ${response.data.address.address_line}`,
          address_detail: response.data.address.additional_address,
          phone_number: response.data.phone_number.replace(/\-/g, ''),
          additional_requests: [],
          payment_methods: [
            {
              id: response.data.payment_methods[0].id,
              vendor_name: response.data.payment_methods[0].vendor_name,
              card_number: response.data.payment_methods[0].card_number,
            },
            {
              id: response.data.payment_methods[1].id,
              vendor_name: response.data.payment_methods[1].vendor_name,
              card_number: response.data.payment_methods[1].card_number,
            },
          ],
          coupons: response.data.coupons,
          points: response.data.points,
        });
      })
      .catch(error => console.log(error));
  };

  // useCallback 고민하기
  // 왜 배열로 해야 하는가?
  // 스테이트는 일단 반복해서 set을 하면 안되는데 어떠한 방법으로 고쳐볼까?
  // 굳이 스테이트로 해야할까 배열도 괜찮은 것 같은데
  // 이 부분에 대해 고민을 해보자
  const getCoupon = async () => {
    for (let i = 0; i < user.coupons.length; i++) {
      await axios
        .get(`http://localhost:4000/coupons/${user.coupons[i]}`)
        .then(response => {
          coupon.push({
            id: user.coupons[i],
            type: response.data.type,
            name: response.data.name,
            value: response.data.value,
          });
        })
        .catch(error => console.log(error));
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (user) {
      getCoupon();
    }
  }, [user]);

  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/order-app" element={<MainPage />} />
        {/* 주문 페이지 */}
        <Route path="/order-app/order" element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  );
};
