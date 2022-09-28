import * as Styled from './styled.jsx';
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Styled.PageContainer>
      <Styled.PageWhiteSpace></Styled.PageWhiteSpace>
      <Styled.PageButton onClick={() => navigate('/order-app/order')}>
        결제 하기
      </Styled.PageButton>
    </Styled.PageContainer>
  );
};
