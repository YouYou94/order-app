import { useState } from 'react';
import { Orderer } from '../Components/Orderer/Orderer.jsx';
import * as Styled from './styled.jsx';

const REQUESTOTTION = [
  {
    id: 0,
    value: 0,
    label: '벨은 누르지 말아주세요!',
  },
  {
    id: 1,
    value: 1,
    label: '문 앞에 놓아 주시고 연락 주세요.',
  },
  {
    id: 2,
    value: 2,
    label: '반찬은 안 주셔도 되요.',
  },
  {
    id: 'CUSTOM',
    value: 'CUSTOM',
    label: '직접 입력',
  },
];

export const OrderPage = ({ user }) => {
  // 결과 State
  const [resultOrderer, setResultOrderer] = useState({
    address: user.address,
    address_detail: user.address_detail,
    phone_number: user.phone_number,
  });
  console.log(user);
  return (
    <Styled.PageContainer>
      <Orderer
        user={user}
        resultOrderer={resultOrderer}
        setResultOrderer={setResultOrderer}
        REQUESTOTTION={REQUESTOTTION}
      />
    </Styled.PageContainer>
  );
};
