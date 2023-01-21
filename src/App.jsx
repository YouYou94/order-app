import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import './App.css';
import { useAxios } from './components/index.jsx';
import { DEFAULTUSER } from './Constants';
import Router from './router/Router';

const USER_URL = '/users/1n2pgi02k5';
const COUPON_URL = '/coupons/';
export const UserContext = createContext();

function App() {
  // 유저 정보
  const { data, error, loading } = useAxios(USER_URL);
  const [user, setUser] = useState(null);
  const couponList = [];

  useEffect(() => {
    if (!loading)
      if (data) setUser(data);
      else setUser(DEFAULTUSER);

    if (error)
      console.log('서버가 연결되지 않았습니다. 기본 유저 정보로 진행합니다.');
  }, [data, error, loading]);

  useEffect(() => {
    if (user) {
      if (user.coupons) {
        user.coupons.map(async coupon => {
          await axios.get(COUPON_URL + coupon).then(response => {
            couponList.push({ id: coupon, ...response.data });
          });

          return data;
        });
      }
    }
  });

  const value = { user, couponList };

  //console.log(couponList);

  if (user)
    return (
      <UserContext.Provider value={value}>
        <div className="App">
          <Router />
        </div>
      </UserContext.Provider>
    );
  else return null;
}

export default App;
