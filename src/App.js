import { createContext, useEffect, useState } from 'react';
import './App.css';
import { useAxios } from './components/index.jsx';
import { DEFAULTUSER } from './Constants';
import Router from './router/Router';

const USER_URL = '/users/1n2pgi02k5';
export const UserContext = createContext();

function App() {
  // 유저 정보
  const { data, error, loading } = useAxios(USER_URL);
  const [user, setUser] = useState(DEFAULTUSER);
  const [coupon, setCoupon] = useState([]);

  useEffect(() => {
    if (data) setUser(data);
  }, []);

  const value = { user, coupon };

  return (
    <UserContext.Provider value={value}>
      <div className="App">
        <Router />
      </div>
    </UserContext.Provider>
  );
}

export default App;
