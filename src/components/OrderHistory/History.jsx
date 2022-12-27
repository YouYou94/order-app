import { Fragment } from 'react';
import styled from 'styled-components';
import { NONE, SHOPPINGBASKET } from '../../Constants';
import { Title, HistoryLabel } from '../index.jsx';

export function History({ prop }) {
  const { result } = prop;

  return (
    <OrderHistoryBox>
      <HeaderBox>
        <Title align={'center'}>배달 주문 내역</Title>
      </HeaderBox>
      {SHOPPINGBASKET.map((item, index) => {
        const { name, count, price } = item;
        return (
          <Fragment key={index}>
            <Line />
            <HistoryBox>
              <HistoryLabel widthcheck={'name'}>
                {name} {count > 1 ? `X ${count}` : ''}
              </HistoryLabel>
              <HistoryLabel align={'right'}>
                {(price * count).toLocaleString('ko-KR')} 원
              </HistoryLabel>
            </HistoryBox>
          </Fragment>
        );
      })}
      {result.discount.method !== NONE ? (
        <>
          <Line />
          <HistoryBox>
            <HistoryLabel widthcheck={'name'}>
              * {result.discount.method}
            </HistoryLabel>
            <HistoryLabel align={'right'}>
              {result.discount.price.toLocaleString('ko-KR')} 원
            </HistoryLabel>
          </HistoryBox>
        </>
      ) : (
        ''
      )}
      <Line />
      <HistoryBox>
        <HistoryLabel widthcheck={'name'}>결제 금액</HistoryLabel>
        <HistoryLabel align={'right'}>
          {(result.totalPrice - result.discount.price).toLocaleString('ko-KR')}{' '}
          원
        </HistoryLabel>
      </HistoryBox>
    </OrderHistoryBox>
  );
}

export const OrderHistoryBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 414px;

  padding: 24px 16px 32px;
`;

export const HeaderBox = styled.div`
  width: 382px;

  padding: 0px 0px 16px;
`;

export const Line = styled.div`
  width: 377px;
  height: 0px;

  border: 1px solid rgb(230, 230, 230);
`;

export const HistoryBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 382px;

  padding: 12px 0px;

  gap: 8px;
`;
