import { useEffect, useState } from 'react';
import { POINT, FIXED } from '../../../Constants.js';
import * as Styled from '../styled.jsx';

export const Point = ({
  user,
  resultPrice,
  resultDiscount,
  setResultDiscount,
}) => {
  const [point, setPoint] = useState(0);

  // 포인트 모두 사용
  const onHandlerPointAll = () => {
    if (Number(user.points) > resultPrice) {
      setPoint(resultPrice);
      setResultDiscount({
        method: POINT,
        type: FIXED,
        value: resultPrice,
        name: '포인트 사용',
      });
    } else {
      setPoint(Number(user.points));
      setResultDiscount({
        method: POINT,
        type: FIXED,
        value: Number(user.points),
        name: '포인트 사용',
      });
    }
  };

  // 포인트 사용
  const onHandlerPoint = event => {
    const { value } = event.target;
    setPoint(value);
    setResultDiscount({
      method: POINT,
      type: FIXED,
      value: Number(value),
      name: '포인트 사용',
    });
  };

  useEffect(() => {
    if (resultDiscount.method !== POINT) setPoint(0);
  }, [resultDiscount.method]);

  return (
    <Styled.DiscountMethodWrap>
      <Styled.DiscountMethodContentWrap>
        <Styled.DiscountMethodLabel>포인트</Styled.DiscountMethodLabel>
        <Styled.DiscountMethodLabel color="blueviolet" weight="bold">
          사용 가능한 포인트 {user.points - point}점
        </Styled.DiscountMethodLabel>
      </Styled.DiscountMethodContentWrap>
      <Styled.DiscountMethodContentWrap>
        <Styled.DiscountMethodInput
          type="text"
          value={resultDiscount.method === POINT ? point : 0}
          onChange={onHandlerPoint}
        />
        <Styled.DiscountMethodBtn onClick={onHandlerPointAll}>
          모두 사용
        </Styled.DiscountMethodBtn>
      </Styled.DiscountMethodContentWrap>
    </Styled.DiscountMethodWrap>
  );
};
