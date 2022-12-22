import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderPage from '../pages/OrderPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/order-app" element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  );
}
