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
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getUser();
  }, []);

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
