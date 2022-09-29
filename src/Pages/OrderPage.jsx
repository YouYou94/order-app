import { useState } from 'react';
import { Orderer } from '../Components/Orderer/Orderer.jsx';
import * as Styled from './styled.jsx';

export const OrderPage = ({ user }) => {
  const [result, setResult] = useState({
    orderer: {
      address: user.address,
      address_detail: user.address_detail,
    },
  });

  return (
    <Styled.PageContainer>
      <Orderer user={user} />
    </Styled.PageContainer>
  );
};
