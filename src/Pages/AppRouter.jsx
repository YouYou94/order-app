import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './MainPage';
import { OrderPage } from './OrderPage';
import axios from 'axios';

export const AppRouter = () => {
  const [user, setUser] = useState(null);

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
        console.log(response);
        console.log(user);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    console.log('쿠폰 데이터 받기');
    console.log(user);
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