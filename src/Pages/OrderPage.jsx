import { useState } from 'react';
import { Orderer } from '../Components/Orderer/Orderer.jsx';
import * as Styled from './styled.jsx';

export const OrderPage = ({ user }) => {
  // 결과 State
  const [resultOrderer, setResultOrderer] = useState({
    address: user.address,
    address_detail: user.address_detail,
  });

  return (
    <Styled.PageContainer>
      <Orderer
        user={user}
        resultOrderer={resultOrderer}
        setResultOrderer={setResultOrderer}
      />
    </Styled.PageContainer>
  );
};
