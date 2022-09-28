import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './MainPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/order-app" element={<MainPage />} />
        {/* 주문 페이지 */}
        <Route />
      </Routes>
    </BrowserRouter>
  );
};
