import { useEffect, useState } from 'react';
import { POINT } from '../../../../Constants.js';
import * as Styled from '../../styled.jsx';
import { PoingUsing } from './PointUsing.jsx';
import { PoingUsingAll } from './PointUsingAll.jsx';

export const Point = ({
  points,
  resultPrice,
  resultDiscount,
  setResultDiscount,
}) => {
  const [point, setPoint] = useState(0);

  useEffect(() => {
    if (resultDiscount.method !== POINT) setPoint(0);
  }, [resultDiscount.method]);

  return (
    <Styled.DiscountMethodWrap>
      <Styled.DiscountMethodContentWrap>
        <Styled.DiscountMethodLabel>포인트</Styled.DiscountMethodLabel>
        <Styled.DiscountMethodLabel color="blueviolet" weight="bold">
          사용 가능한 포인트 {(Number(points) - point).toLocaleString('ko-KR')}
          점
        </Styled.DiscountMethodLabel>
      </Styled.DiscountMethodContentWrap>
      <Styled.DiscountMethodContentWrap>
        <PoingUsing
          point={point}
          resultDiscount={resultDiscount}
          setPoint={setPoint}
          setResultDiscount={setResultDiscount}
          resultPrice={resultPrice}
        />
        <PoingUsingAll
          points={points}
          resultPrice={resultPrice}
          setPoint={setPoint}
          setResultDiscount={setResultDiscount}
        />
      </Styled.DiscountMethodContentWrap>
    </Styled.DiscountMethodWrap>
  );
};
