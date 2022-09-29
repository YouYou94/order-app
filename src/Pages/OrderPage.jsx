import { Orderer } from '../Components/Orderer/Orderer.jsx';
import * as Styled from './styled.jsx';

export const OrderPage = ({ user }) => {
  return (
    <Styled.PageContainer>
      <Orderer user={user} />
    </Styled.PageContainer>
  );
};
